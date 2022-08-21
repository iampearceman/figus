import React, { SVGProps } from "react";

export function FolderSearchDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M19.5 12c0-1.4045 0-2.1067-.3371-2.6111a1.9996 1.9996 0 0 0-.5518-.5518C18.1067 8.5 17.4045 8.5 16 8.5h-1.8431c-.8175 0-1.2263 0-1.5938-.1522-.3676-.1523-.6566-.4413-1.2347-1.0194l-.6568-.6568c-.5781-.578-.8671-.8671-1.2347-1.0194C9.0694 5.5 8.6607 5.5 7.8431 5.5H7.5c-1.8856 0-2.8284 0-3.4142.5858C3.5 6.6716 3.5 7.6144 3.5 9.5v5c0 1.8856 0 2.8284.5858 3.4142C4.6716 18.5 5.6144 18.5 7.5 18.5H12"
                strokeOpacity=".24"
                strokeWidth="1.2"
            />
            <circle
                cx="16.5"
                cy="16.5"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M19.5 19.5 21 21"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default FolderSearchDuotoneLine;
