import React, { SVGProps } from "react";

export function DoneAllRoundLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="m8 13 4.2278 3.3821c.4279.3424 1.0516.2765 1.3986-.1476L22.0001 6"
            />
            <path
                fill="currentColor"
                d="m10.8051 11.9167 4.5819-5.6a.5.5 0 0 0-.774-.6333l-4.5761 5.5931.7682.6402Zm-3.1663 3.8699-.7683-.6402-.6504.7951a.5.5 0 0 1-.687.0833L2.3 13.6a.5.5 0 1 0-.6.8l3.233 2.4248c.6431.4823 1.552.372 2.061-.2501l.6448-.7881Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default DoneAllRoundLight;
