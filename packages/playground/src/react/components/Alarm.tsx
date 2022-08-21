import React, { SVGProps } from "react";

export function Alarm(props: SVGProps<SVGSVGElement>) {
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
                d="M9.1494 7.8313C8.5765 5.9218 10.0064 4 12 4s3.4235 1.9218 2.8506 3.8313l-1.5633 5.2109c-.0702.234-.1053.351-.1593.4473a1.0002 1.0002 0 0 1-.6537.4864C12.3664 14 12.2443 14 12 14s-.3664 0-.4743-.0241a1.0002 1.0002 0 0 1-.6537-.4864c-.054-.0963-.0891-.2133-.1593-.4473L9.1494 7.8313Z"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="19"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Alarm;
