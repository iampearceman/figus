import React, { SVGProps } from "react";

export function TicketDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M3.5 8.5c0-1.6569 1.3431-3 3-3h11c1.6569 0 3 1.3431 3 3v.25a.75.75 0 0 1-.75.75c-1.2426 0-2.25 1.0074-2.25 2.25v.5c0 1.2426 1.0074 2.25 2.25 2.25a.75.75 0 0 1 .75.75v.25c0 1.6569-1.3431 3-3 3h-11c-1.6569 0-3-1.3431-3-3v-.25a.75.75 0 0 1 .75-.75c1.2426 0 2.25-1.0074 2.25-2.25v-.5c0-1.2426-1.0074-2.25-2.25-2.25a.75.75 0 0 1-.75-.75V8.5Z"
                strokeOpacity=".24"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m12.9592 10.159.4036-.2952-.4036.2952a.9994.9994 0 0 0 .4953.3598l1.5441.5069-.9513 1.3176.4054.2927-.4054-.2927a1.0006 1.0006 0 0 0-.1892.5823l-.0049 1.6251-1.5471-.4975-.153.476.153-.476a1 1 0 0 0-.6122 0l-1.5471.4975-.0049-1.6251a1.0004 1.0004 0 0 0-.1892-.5823l-.9513-1.3176 1.5441-.5069a.9994.9994 0 0 0 .4953-.3598L12 8.8471l.9592 1.3119Z"
            />
        </svg>
    );
}
export default TicketDuotoneLine;
