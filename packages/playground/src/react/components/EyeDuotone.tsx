import React, { SVGProps } from "react";

export function EyeDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M2.4555 11.1164C3.531 9.2342 6.5557 5 11.9999 5c5.4443 0 8.469 4.2342 9.5445 6.1164.2207.3861.331.5792.3188.8672-.0121.288-.1418.4762-.4012.8526C20.1817 14.6935 16.7061 19 11.9999 19c-4.706 0-8.1818-4.3065-9.462-6.1638-.2594-.3764-.3891-.5646-.4013-.8526-.0121-.288.0982-.4811.3189-.8672ZM11.9999 15c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3c-1.6568 0-3 1.3431-3 3s1.3432 3 3 3Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M12 5c-5.4442 0-8.469 4.2342-9.5445 6.1164-.2206.3861-.331.5792-.3188.8672.0122.288.1419.4762.4013.8526C3.8182 14.6935 7.2939 19 12 19s8.1818-4.3065 9.462-6.1638c.2594-.3764.3891-.5646.4013-.8526.0121-.288-.0982-.4811-.3188-.8672C20.4689 9.2342 17.4442 5 12 5Z"
                strokeWidth="1.2"
            />
            <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default EyeDuotone;
