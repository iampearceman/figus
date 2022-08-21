import React, { SVGProps } from "react";

export function BellPinFill(props: SVGProps<SVGSVGElement>) {
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
                d="M13.7942 3.295A5.5777 5.5777 0 0 0 12 3C9.1535 3 6.7622 5.1403 6.4478 7.9694l-.2518 2.2662-.0064.0577a8.0001 8.0001 0 0 1-1.0732 3.1792l-.0298.0497-.578.9634c-.5246.8743-.7868 1.3114-.7302 1.6703a1 1 0 0 0 .346.6109C4.4028 17 4.9126 17 5.9321 17h12.1356c1.0195 0 1.5293 0 1.8078-.2332a1 1 0 0 0 .346-.6109c.0566-.3589-.2057-.796-.7302-1.6703l-.5781-.9634-.0298-.0497a8.0013 8.0013 0 0 1-.9599-2.4731C15.1974 10.9586 13 8.7359 13 6c0-.9967.2916-1.9253.7942-2.705Zm2.4799 1.6938A1.9907 1.9907 0 0 0 16 6c0 .9498.662 1.745 1.5498 1.9491a5.5674 5.5674 0 0 0-1.2757-2.9603Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M9 17a3.0003 3.0003 0 0 0 1.8519 2.7716 2.9996 2.9996 0 0 0 3.2694-.6503A2.9993 2.9993 0 0 0 15 17H9Z"
            />
            <circle
                cx="18"
                cy="6"
                r="2.5"
                fill="currentColor"
                stroke="currentColor"
            />
        </svg>
    );
}
export default BellPinFill;
