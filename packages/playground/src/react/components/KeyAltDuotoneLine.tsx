import React, { SVGProps } from "react";

export function KeyAltDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M3.5 7.5c0-1.4001 0-2.1002.2725-2.635A2.5001 2.5001 0 0 1 4.865 3.7725C5.3998 3.5 6.1 3.5 7.5 3.5h9c1.4001 0 2.1002 0 2.635.2725a2.5 2.5 0 0 1 1.0925 1.0925C20.5 5.3998 20.5 6.1 20.5 7.5v9c0 1.4001 0 2.1002-.2725 2.635a2.5 2.5 0 0 1-1.0925 1.0925c-.5348.2725-1.2349.2725-2.635.2725h-9c-1.4001 0-2.1002 0-2.635-.2725a2.5 2.5 0 0 1-1.0925-1.0925C3.5 18.6002 3.5 17.9001 3.5 16.5v-9Z"
                strokeOpacity=".24"
            />
            <circle cx="8.5" cy="11.5" r="2" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M10.5 11.5h5m2 2v-1.85a.15.15 0 0 0-.15-.15H15.5m0 0v2"
            />
        </svg>
    );
}
export default KeyAltDuotoneLine;
