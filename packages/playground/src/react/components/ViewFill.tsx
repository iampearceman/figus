import React, { SVGProps } from "react";

export function ViewFill(props: SVGProps<SVGSVGElement>) {
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
                d="M20.7703 12c0-.3588-.1941-.5944-.5823-1.0657C18.768 9.2101 15.6357 6 12 6c-3.6357 0-6.768 3.2101-8.188 4.9343-.3882.4713-.5823.7069-.5823 1.0657 0 .3588.1941.5944.5823 1.0657C5.232 14.7899 8.3643 18 12 18c3.6357 0 6.768-3.2101 8.188-4.9343.3882-.4713.5823-.7069.5823-1.0657ZM12 15c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3c-1.6568 0-3 1.3431-3 3s1.3432 3 3 3Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default ViewFill;
