import React, { SVGProps } from "react";

export function BugFill(props: SVGProps<SVGSVGElement>) {
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
                d="M7 14.3333c0-1.2461 0-1.8692.268-2.3333A2.001 2.001 0 0 1 8 11.2679C8.4641 11 9.0872 11 10.3333 11h3.3334c1.2461 0 1.8692 0 2.3333.2679.304.1756.5565.4281.7321.7321C17 12.4641 17 13.0872 17 14.3333V16c0 .9293 0 1.394-.0769 1.7804a4 4 0 0 1-3.1427 3.1427C13.394 21 12.9293 21 12 21s-1.394 0-1.7804-.0769a4 4 0 0 1-3.1427-3.1427C7 17.394 7 16.9293 7 16v-1.6667ZM9 9c0-.9319 0-1.3978.1522-1.7654a2 2 0 0 1 1.0824-1.0824C10.6022 6 11.0681 6 12 6c.9319 0 1.3978 0 1.7654.1522.49.203.8794.5924 1.0824 1.0824C15 7.6022 15 8.0681 15 9v2H9V9Z"
                strokeWidth="2"
            />
            <path
                stroke="currentColor"
                d="M12 11v4m3-12-2 3M9 3l2 3M7 16H2m20 0h-5m3-7v1c0 1.6569-1.3431 3-3 3m3 9c0-1.6569-1.3431-3-3-3M4 9v1c0 1.6569 1.3431 3 3 3m-3 9c0-1.6569 1.3431-3 3-3"
                strokeWidth="2"
            />
        </svg>
    );
}
export default BugFill;
