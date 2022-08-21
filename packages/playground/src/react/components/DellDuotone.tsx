import React, { SVGProps } from "react";

export function DellDuotone(props: SVGProps<SVGSVGElement>) {
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
                r="9"
                fill="currentColor"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="m9 14.9997 6.0001-6M15 15 9 9"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default DellDuotone;
