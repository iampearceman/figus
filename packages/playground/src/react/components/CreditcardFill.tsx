import React, { SVGProps } from "react";

export function CreditcardFill(props: SVGProps<SVGSVGElement>) {
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
                d="M2.0017 10h19.9966c-.0121-2.175-.1086-3.353-.877-4.1213C20.2426 5 18.8284 5 16 5H8c-2.8284 0-4.2426 0-5.1213.8787-.7684.7684-.8649 1.9463-.877 4.1213ZM22 12H2v2c0 2.8284 0 4.2426.8787 5.1213C3.7574 20 5.1716 20 8 20h8c2.8284 0 4.2426 0 5.1213-.8787C22 18.2426 22 16.8284 22 14v-2ZM7 15c-.5523 0-1 .4477-1 1s.4477 1 1 1h.01c.5523 0 1-.4477 1-1s-.4477-1-1-1H7Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default CreditcardFill;
