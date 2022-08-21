import React, { SVGProps } from "react";

export function CloseRound(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                d="M18 6 6 18M6 6l12 12"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}
export default CloseRound;
