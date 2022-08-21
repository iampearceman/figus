import React, { SVGProps } from "react";

export function BedLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M21.5 19.5v-11c0-1.1046-.8954-2-2-2h-4c-1.1046 0-2 .8954-2 2v11"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                d="M10 19.5a.5.5 0 0 0 1 0h-1Zm.5-8h.5a.5.5 0 0 0-.5-.5v.5Zm-8.5 8a.5.5 0 0 0 1 0H2Zm9 0v-8h-1v8h1Zm-.5-8.5h-7v1h7v-1ZM2 12.5v7h1v-7H2ZM3.5 11c-.8284 0-1.5.6716-1.5 1.5h1a.5.5 0 0 1 .5-.5v-1Z"
            />
            <path
                fill="currentColor"
                d="M21.5 11.5h.5a.5.5 0 0 0-.5-.5v.5Zm-19 3H2a.5.5 0 0 0 .5.5v-.5Zm19 0v.5a.5.5 0 0 0 .5-.5h-.5Zm0-3.5h-18v1h18v-1ZM2 12.5v2h1v-2H2Zm.5 2.5h19v-1h-19v1Zm19.5-.5v-3h-1v3h1ZM3.5 11c-.8284 0-1.5.6716-1.5 1.5h1a.5.5 0 0 1 .5-.5v-1Z"
            />
            <path
                fill="currentColor"
                d="M10.5 13.5v-1c0-.5523.4477-1 1-1h9c.5523 0 1 .4477 1 1v1c0 .5523-.4477 1-1 1h-9c-.5523 0-1-.4477-1-1Z"
            />
        </svg>
    );
}
export default BedLight;
