import React, { SVGProps } from "react";

export function PaperAlt(props: SVGProps<SVGSVGElement>) {
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
                d="M16 8c.93 0 1.395 0 1.7765.1022a3.0001 3.0001 0 0 1 2.1213 2.1213C20 10.605 20 11.07 20 12v6c0 1.1046-.8954 2-2 2s-2-.8954-2-2V7.2c0-1.1201 0-1.6802-.218-2.108a1.9997 1.9997 0 0 0-.874-.874C14.4802 4 13.9201 4 12.8 4H7.2c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C4 5.5198 4 6.08 4 7.2v9.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C5.5198 20 6.08 20 7.2 20H18"
                strokeWidth="2"
            />
            <path
                stroke="currentColor"
                d="M12 8H8v4h4V8Z"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M8 15c-.5523 0-1 .4477-1 1s.4477 1 1 1v-2Zm4 2c.5523 0 1-.4477 1-1s-.4477-1-1-1v2Zm-4 0h4v-2H8v2Z"
            />
        </svg>
    );
}
export default PaperAlt;
