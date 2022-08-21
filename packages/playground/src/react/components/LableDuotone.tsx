import React, { SVGProps } from "react";

export function LableDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M3 8c0-.9428 0-1.4142.2929-1.7071C3.5858 6 4.0572 6 5 6h10.9296c.524 0 .786 0 1.0071.1183.2211.1184.3664.3363.657.7723l2.6667 4c.3585.5377.5377.8066.5377 1.1094 0 .3028-.1792.5717-.5377 1.1094l-2.6667 4c-.2906.436-.4359.6539-.657.7723C16.7156 18 16.4536 18 15.9296 18H5c-.9428 0-1.4142 0-1.7071-.2929C3 17.4142 3 16.9428 3 16V8Z"
                fillOpacity=".24"
                strokeWidth="1.4"
            />
            <circle
                cx="15"
                cy="12"
                r="1"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.4"
            />
        </svg>
    );
}
export default LableDuotone;
