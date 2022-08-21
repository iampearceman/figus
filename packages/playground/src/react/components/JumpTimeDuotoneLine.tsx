import React, { SVGProps } from "react";

export function JumpTimeDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="m17.6523 5.5795-5.4379 9.0632c-.0971.1618-.3317.1618-.4288 0L6.3477 5.5795c-.1194-.199.0732-.4392.2934-.3658l5.2798 1.76a.2503.2503 0 0 0 .1582 0l5.2798-1.76c.2202-.0734.4128.1668.2934.3658Z"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M4 19h5m6 0h5"
                strokeOpacity=".24"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default JumpTimeDuotoneLine;
