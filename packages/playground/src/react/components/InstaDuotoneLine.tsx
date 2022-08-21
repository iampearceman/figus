import React, { SVGProps } from "react";

export function InstaDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M4.1716 4.1716C3 5.343 3 7.2288 3 11v2c0 3.7712 0 5.6569 1.1716 6.8284C5.343 21 7.2288 21 11 21h2c3.7712 0 5.6569 0 6.8284-1.1716C21 18.6569 21 16.7712 21 13v-2c0-3.7712 0-5.6569-1.1716-6.8284C18.6569 3 16.7712 3 13 3h-2C7.2288 3 5.3431 3 4.1716 4.1716ZM12 16c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4-2.2091 0-4 1.7909-4 4 0 2.2091 1.7909 4 4 4Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M3 11c0-3.7712 0-5.6569 1.1716-6.8284C5.343 3 7.2288 3 11 3h2c3.7712 0 5.6569 0 6.8284 1.1716C21 5.343 21 7.2288 21 11v2c0 3.7712 0 5.6569-1.1716 6.8284C18.6569 21 16.7712 21 13 21h-2c-3.7712 0-5.6569 0-6.8284-1.1716C3 18.6569 3 16.7712 3 13v-2Z"
                strokeWidth="1.2"
            />
            <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
            <circle
                cx="12"
                cy="12"
                r="3.4"
                stroke="currentColor"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default InstaDuotoneLine;
