import React, { SVGProps } from "react";

export function PaperFill(props: SVGProps<SVGSVGElement>) {
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
                d="M2 21V7c0-1.8856 0-2.8284.5858-3.4142C3.1716 3 4.1144 3 6 3h10c.8317 0 1.4778 0 2.0037.027C15.7519 3.2742 14 5.1826 14 7.5v3.5002l-.0988 9.9669L11 20l-3 1-3-1-3 1Zm19-10h-5V7.5C16 6.1193 17.1193 5 18.5 5S21 6.1193 21 7.5V11ZM4 7c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-.5523 0-1-.4477-1-1Zm0 4c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-.5523 0-1-.4477-1-1Zm0 4c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-.5523 0-1-.4477-1-1Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default PaperFill;
