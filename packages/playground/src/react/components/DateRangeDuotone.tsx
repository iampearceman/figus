import React, { SVGProps } from "react";

export function DateRangeDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M3 10c0-1.8856 0-2.8284.5858-3.4142C4.1716 6 5.1144 6 7 6h10c1.8856 0 2.8284 0 3.4142.5858C21 7.1716 21 8.1144 21 10H3Z"
                fillOpacity=".24"
            />
            <rect
                width="18"
                height="15"
                x="3"
                y="6"
                stroke="currentColor"
                rx="2"
                strokeWidth="1.2"
            />
            <path stroke="currentColor" d="M7 3v3m10-3v3" strokeWidth="1.2" />
            <rect
                width="4"
                height="2"
                x="7"
                y="12"
                fill="currentColor"
                rx=".5"
            />
            <rect
                width="4"
                height="2"
                x="7"
                y="16"
                fill="currentColor"
                rx=".5"
            />
            <rect
                width="4"
                height="2"
                x="13"
                y="12"
                fill="currentColor"
                rx=".5"
            />
            <rect
                width="4"
                height="2"
                x="13"
                y="16"
                fill="currentColor"
                rx=".5"
            />
        </svg>
    );
}
export default DateRangeDuotone;
