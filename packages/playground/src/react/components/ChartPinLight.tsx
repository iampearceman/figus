import React, { SVGProps } from "react";

export function ChartPinLight(props: SVGProps<SVGSVGElement>) {
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
                d="m15.5 10.5-3 3-2-2-3 3"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M14.5 4.5H7.7c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C4.5 6.0198 4.5 6.58 4.5 7.7v8.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874.4278.218.9879.218 2.108.218h8.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874c.218-.4278.218-.9879.218-2.108V9.5"
            />
            <circle cx="18.5" cy="5.5" r="2" stroke="currentColor" />
        </svg>
    );
}
export default ChartPinLight;
