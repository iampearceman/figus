import React, { SVGProps } from "react";

export function ChieldCheck(props: SVGProps<SVGSVGElement>) {
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
                d="m18.7022 5.7844-5.9144-2.5347a1.9998 1.9998 0 0 0-1.5756 0L5.2978 5.7844A2 2 0 0 0 4.101 7.8708l.613 4.9039a7 7 0 0 0 2.4646 4.5093l3.5409 2.9507a2 2 0 0 0 2.5608 0l3.5409-2.9507a7.0005 7.0005 0 0 0 2.4647-4.5093l.6129-4.904a1.9998 1.9998 0 0 0-1.1967-2.0863Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m9 12 2.5687 2.5687c.2231.2231.5946.1864.7696-.0762L16 9"
                strokeWidth="2"
            />
        </svg>
    );
}
export default ChieldCheck;
