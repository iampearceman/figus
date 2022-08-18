import express from "express";
import * as path from "path";
import { fileURLToPath } from "url";
import fse from "fs-extra";
import { Logger } from "vite";
import colors from "picocolors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function printServerUrls(
    urls: { local: string[] },
    info: Logger["info"]
): void {
    const colorUrl = (url: string) =>
        colors.cyan(
            url.replace(/:(\d+)\//, (_, port) => `:${colors.bold(port)}/`)
        );
    for (const url of urls.local) {
        info(
            `  ${colors.green("➜")}  ${colors.bold(
                "Explorer is running on"
            )}:   ${colorUrl(url)}`
        );
    }
}

export async function serve({
    path: outputPath,
    icons,
}: {
    path: string;
    icons: { body: string; filename: string; name: string }[];
}) {
    const app = express();
    const port = 3000;
    const assetsPath = path.join(__dirname, "public");
    await fse.copy(path.resolve(outputPath), path.join(assetsPath, "assets"), {
        recursive: true,
    });
    console.log("here");

    app.get("/", (req, res) => {
        res.send({
            icons,
        });
    });

    app.get("/download", (req, res) => {
        console.log(req, res);
    });

    app.use(express.static(assetsPath));

    app.listen(port, () => {
        printServerUrls(
            {
                local: ["http://localhost:3000/index.html"],
            },
            console.log
        );
    });
}
