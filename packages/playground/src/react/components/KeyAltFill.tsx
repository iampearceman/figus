import React, { SVGProps } from "react";

export function KeyAltFill(props: SVGProps<SVGSVGElement>) {
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
                d="M3 7c0-1.4001 0-2.1002.2725-2.635A2.5001 2.5001 0 0 1 4.365 3.2725C4.8998 3 5.6 3 7 3h10c1.4001 0 2.1002 0 2.635.2725a2.5 2.5 0 0 1 1.0925 1.0925C21 4.8998 21 5.6 21 7v10c0 1.4001 0 2.1002-.2725 2.635a2.5 2.5 0 0 1-1.0925 1.0925C19.1002 21 18.4001 21 17 21H7c-1.4001 0-2.1002 0-2.635-.2725a2.5 2.5 0 0 1-1.0925-1.0925C3 19.1002 3 18.4001 3 17V7Zm7.8293 4C10.4175 9.8348 9.3063 9 8 9c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3c1.3062 0 2.4175-.8348 2.8293-2H13v1c0 .5523.4477 1 1 1s1-.4477 1-1v-1h1v1c0 .5523.4477 1 1 1s1-.4477 1-1v-1.85c0-.6351-.5149-1.15-1.15-1.15h-6.0207ZM9 12c0-.5523-.4477-1-1-1s-1 .4477-1 1 .4477 1 1 1 1-.4477 1-1Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default KeyAltFill;
