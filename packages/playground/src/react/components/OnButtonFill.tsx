import React, { SVGProps } from "react";

export function OnButtonFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="currentColor"
                d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Zm0-16c.5523 0 1 .4477 1 1v3c0 .5523-.4477 1-1 1s-1-.4477-1-1V6c0-.5523.4477-1 1-1Zm3.5355 2.0503c.3906-.3906 1.0237-.3906 1.4142 0A6.9999 6.9999 0 0 1 12 19a6.9997 6.9997 0 0 1-6.4672-4.3212 7 7 0 0 1 1.5175-7.6286c.3905-.3905 1.0236-.3905 1.4142 0 .3905.3906.3905 1.0237 0 1.4143a4.9999 4.9999 0 1 0 7.071 0c-.3905-.3906-.3905-1.0237 0-1.4142Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default OnButtonFill;
