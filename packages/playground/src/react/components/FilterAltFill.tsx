import React, { SVGProps } from "react";

export function FilterAltFill(props: SVGProps<SVGSVGElement>) {
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
                d="M5 2c-.5522 0-1 .4477-1 1v2h16.0001V3c0-.5523-.4478-1-1-1h-14Zm14.7823 5H4.2178a2 2 0 0 0 .4652.5976l6.0001 5.25c.754.6598 1.8799.6598 2.634 0l6-5.25A1.999 1.999 0 0 0 19.7823 7Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M14 16.7049V10h-4v8.7049l4-2Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default FilterAltFill;
