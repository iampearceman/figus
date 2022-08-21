import React, { SVGProps } from "react";

export function FileDockSearch(props: SVGProps<SVGSVGElement>) {
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
                d="M9 7h4m-4 8h3m-3-4h6"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M19 11V9c0-2.8284 0-4.2426-.8787-5.1213C17.2426 3 15.8284 3 13 3h-2c-2.8284 0-4.2426 0-5.1213.8787C5 4.7574 5 6.1716 5 9v6c0 2.8284 0 4.2426.8787 5.1213C6.7574 21 8.1716 21 11 21h1"
                strokeWidth="2"
            />
            <circle
                cx="17.5"
                cy="17.5"
                r="2.5"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m21 21-1.5-1.5"
                strokeWidth="2"
            />
        </svg>
    );
}
export default FileDockSearch;
