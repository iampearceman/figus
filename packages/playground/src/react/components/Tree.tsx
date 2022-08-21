import React, { SVGProps } from "react";

export function Tree(props: SVGProps<SVGSVGElement>) {
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
                d="M12 17v3"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M6.2553 15.3861 7.0446 16l-.7893-.6139ZM10.4444 10V9a1 1 0 0 0-.7893.386l.7893.614Zm7.3003 5.3861L16.9554 16l.7893-.6139ZM13.5556 10l.7893-.614A1 1 0 0 0 13.5556 9v1Zm-6.511 6 4.1892-5.3861-1.5787-1.2278-4.1892 5.386L7.0446 16Zm0 0L5.466 14.7721C4.4441 16.0858 5.3803 18 7.0446 18v-2Zm9.9108 0H7.0446v2h9.9108v-2Zm0 0v2c1.6643 0 2.6004-1.9142 1.5787-3.2279L16.9554 16Zm-4.1892-5.3861L16.9554 16l1.5787-1.2279-4.1892-5.386-1.5787 1.2278ZM13.5556 9h-3.1112v2h3.1112V9Z"
            />
            <path
                fill="currentColor"
                d="m12 4 .7071-.7071c-.3905-.3905-1.0237-.3905-1.4142 0L12 4Zm-.7071-.7071L7 7.5858 8.4142 9l4.2929-4.2929-1.4142-1.4142ZM8.4142 11h7.1716V9H8.4142v2ZM17 7.5858l-4.2929-4.293-1.4142 1.4143L15.5858 9 17 7.5858ZM15.5858 11C17.3676 11 18.2599 8.8457 17 7.5858L15.5858 9v2ZM7 7.5858C5.74 8.8458 6.6324 11 8.4142 11V9L7 7.5858Z"
            />
        </svg>
    );
}
export default Tree;
