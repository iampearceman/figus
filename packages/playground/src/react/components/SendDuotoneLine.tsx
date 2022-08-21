import React, { SVGProps } from "react";

export function SendDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="m16.2053 5.265-6.491 2.1636c-1.6335.5445-2.4502.8167-2.7755 1.1293-.819.787-.819 2.0972 0 2.8842.3253.3126 1.142.5848 2.7755 1.1293.3291.1097.4936.1646.6396.2418a1.999 1.999 0 0 1 .8329.8329c.0772.146.1321.3105.2418.6396.5445 1.6335.8167 2.4502 1.1293 2.7755.787.819 2.0972.819 2.8842 0 .3126-.3253.5848-1.142 1.1293-2.7755l2.1637-6.491c.5519-1.6558.8279-2.4836.3909-2.9207-.437-.437-1.2649-.161-2.9207.391Z"
                fillOpacity=".24"
            />
        </svg>
    );
}
export default SendDuotoneLine;
