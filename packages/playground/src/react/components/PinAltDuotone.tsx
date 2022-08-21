import React, { SVGProps } from "react";

export function PinAltDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M19.3612 18c.746.4561 1.1388.9734 1.1388 1.5s-.3928 1.0439-1.1388 1.5c-.746.4561-1.819.8348-3.1112 1.0981-1.2922.2633-2.7579.4019-4.25.4019-1.4921 0-2.9578-.1386-4.25-.4019-1.2922-.2633-2.3652-.642-3.1112-1.0981-.746-.4561-1.1388-.9734-1.1388-1.5s.3927-1.0439 1.1388-1.5"
                strokeOpacity=".24"
            />
            <path
                fill="currentColor"
                d="M19 10c0 5.0163-5.119 8.0348-6.602 8.804a.8547.8547 0 0 1-.796 0C10.119 18.0348 5 15.0163 5 10c0-3.866 3.134-7 7-7s7 3.134 7 7Z"
                fillOpacity=".24"
            />
            <circle cx="12" cy="10" r="3" fill="currentColor" />
        </svg>
    );
}
export default PinAltDuotone;
