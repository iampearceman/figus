import React, { SVGProps } from "react";

export function FolderAdd(props: SVGProps<SVGSVGElement>) {
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
                d="M19 14v-2c0-1.8856 0-2.8284-.5858-3.4142C17.8284 8 16.8856 8 15 8h-1.3431c-.8175 0-1.2263 0-1.5938-.1522-.3676-.1523-.6566-.4413-1.2347-1.0194l-.6568-.6568c-.578-.578-.8671-.8671-1.2347-1.0194C8.5694 5 8.1607 5 7.3431 5H7c-1.8856 0-2.8284 0-3.4142.5858C3 6.1716 3 7.1144 3 9v6c0 1.8856 0 2.8284.5858 3.4142C4.1716 19 5.1144 19 7 19h7m2 0h3m0 0h3m-3 0v3m0-3v-3"
                strokeWidth="2"
            />
        </svg>
    );
}
export default FolderAdd;
