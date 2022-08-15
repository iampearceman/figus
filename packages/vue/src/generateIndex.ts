import path from "path";
import fse from "fs-extra";
import globAsync from "fast-glob";
import { Options } from "@figus/types";

export async function generateIndex({ output }: { output: Options["output"] }) {
    if (!output) {
        return;
    }
    const files = await globAsync(path.join(output, "**/*.vue"));
    const index = files
        .map((file) => {
            const typename = path.basename(file).replace(".vue", "");
            return `export { default as ${typename} } from './${typename}.vue';\n`;
        })
        .join("");

    await fse.writeFile(path.join(output, "index.ts"), index);
}
