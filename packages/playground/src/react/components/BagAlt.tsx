import React, { SVGProps } from "react";

export function BagAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M8 12V8c0-2.2091 1.7909-4 4-4 2.2091 0 4 1.7909 4 4v4"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M3.6944 12.6678c.145-1.7409.2176-2.6113.7916-3.1396C5.0602 9 5.9337 9 7.6806 9h8.639c1.7469 0 2.6204 0 3.1945.5282.574.5283.6466 1.3987.7917 3.1396l.5138 6.1661c.0845 1.0135.1267 1.5203-.1704 1.8432C20.352 21 19.8435 21 18.8264 21H5.1736c-1.017 0-1.5256 0-1.8227-.3229-.297-.3229-.2549-.8297-.1704-1.8432l.5139-6.1661Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default BagAlt;
