import React, { SVGProps } from "react";

export function NotebookDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="M3.5 7.5h4m-4 8h4m-4-4h4" />
            <path
                fill="currentColor"
                d="M5.0107 5.6954c-.004.1425-.006.2137.0381.2591C5.093 6 5.165 6 5.3088 6H7.5C8.3284 6 9 6.6716 9 7.5S8.3284 9 7.5 9H5.3c-.1414 0-.2121 0-.256.044C5 9.0878 5 9.1585 5 9.3v.4c0 .1414 0 .2121.044.256.0439.044.1146.044.256.044h2.2c.8284 0 1.5.6716 1.5 1.5S8.3284 13 7.5 13H5.3c-.1414 0-.2121 0-.256.0439C5 13.0879 5 13.1586 5 13.3v.4c0 .1414 0 .2121.044.2561C5.0878 14 5.1585 14 5.3 14h2.2c.8284 0 1.5.6716 1.5 1.5S8.3284 17 7.5 17H5.3c-.1415 0-.2122 0-.2562.044-.044.044-.0438.1148-.0437.2565.0017 1.687.0319 2.5599.5857 3.1137C6.1716 21 7.1144 21 9 21h6c1.8856 0 2.8284 0 3.4142-.5858C19 19.8284 19 18.8856 19 17V7c0-1.8856 0-2.8284-.5858-3.4142C17.8284 3 16.8856 3 15 3H9c-1.8856 0-2.8284 0-3.4142.5858-.4315.4315-.5451 1.0566-.575 2.1096Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="M15.5 10.5v-3" />
        </svg>
    );
}
export default NotebookDuotone;
