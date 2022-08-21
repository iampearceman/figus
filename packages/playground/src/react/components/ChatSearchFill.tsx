import React, { SVGProps } from "react";

export function ChatSearchFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="17"
                cy="16"
                r="2.5"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path stroke="currentColor" d="m19 18 2 2" strokeWidth="2" />
            <path
                fill="currentColor"
                d="M2 10.2c0-2.5202 0-3.7803.4905-4.743A4.5 4.5 0 0 1 4.457 3.4905C5.4197 3 6.6798 3 9.2 3h5.6c2.5202 0 3.7804 0 4.743.4905a4.4998 4.4998 0 0 1 1.9665 1.9665C22 6.4197 22 7.6798 22 10.2v3.5055c-.8696-1.8919-2.7814-3.2055-5-3.2055-3.0376 0-5.5 2.4624-5.5 5.5 0 2.2186 1.3136 4.1304 3.2055 5H5.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C2 19.4802 2 18.9201 2 17.8v-7.6Zm4-.2c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-.5523 0-1-.4477-1-1Zm0 4c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-.5523 0-1-.4477-1-1Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default ChatSearchFill;
