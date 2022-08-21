import React, { SVGProps } from "react";

export function ViewAlt(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="1"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M18.2265 11.3805c.1287.2535.193.3802.193.6195 0 .2393-.0643.366-.193.6195C17.6001 13.8533 15.812 16.5 12 16.5s-5.6-2.6467-6.2265-3.8805c-.1287-.2535-.193-.3802-.193-.6195 0-.2393.0643-.366.193-.6195C6.3999 10.1467 8.188 7.5 12 7.5s5.6001 2.6467 6.2265 3.8805Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M17 4h.2c1.7913 0 2.687 0 3.2435.5565C21 5.113 21 6.0087 21 7.8V8m-4 12h.2c1.7913 0 2.687 0 3.2435-.5565C21 18.887 21 17.9913 21 16.2V16M7 4h-.2c-1.7913 0-2.687 0-3.2435.5565C3 5.113 3 6.0087 3 7.8V8m4 12h-.2c-1.7913 0-2.687 0-3.2435-.5565C3 18.887 3 17.9913 3 16.2V16"
                strokeWidth="2"
            />
        </svg>
    );
}
export default ViewAlt;
