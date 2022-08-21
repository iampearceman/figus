import React, { SVGProps } from "react";

export function AddSquareDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M3 9.4c0-2.2402 0-3.3603.436-4.216a4 4 0 0 1 1.748-1.748C6.0397 3 7.1598 3 9.4 3h5.2c2.2402 0 3.3603 0 4.216.436a4.0002 4.0002 0 0 1 1.748 1.748C21 6.0397 21 7.1598 21 9.4v5.2c0 2.2402 0 3.3603-.436 4.216a4.0003 4.0003 0 0 1-1.748 1.748C17.9603 21 16.8402 21 14.6 21H9.4c-2.2402 0-3.3603 0-4.216-.436a4.0002 4.0002 0 0 1-1.748-1.748C3 17.9603 3 16.8402 3 14.6V9.4Z"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="M12 8v8m4-4H8"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default AddSquareDuotone;
