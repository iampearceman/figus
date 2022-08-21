import React, { SVGProps } from "react";

export function LableFill(props: SVGProps<SVGSVGElement>) {
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
                d="M3.2929 6.2929C3 6.5858 3 7.0572 3 8v8c0 .9428 0 1.4142.2929 1.7071C3.5858 18 4.0572 18 5 18h9.8593c1.0479 0 1.5719 0 2.014-.2367.4422-.2366.7329-.6726 1.3142-1.5445l1.3333-2c.717-1.0755 1.0755-1.6132 1.0755-2.2188 0-.6056-.3585-1.1433-1.0755-2.2188l-1.3333-2c-.5813-.872-.872-1.3079-1.3142-1.5446C16.4312 6 15.9072 6 14.8593 6H5c-.9428 0-1.4142 0-1.7071.2929ZM15 14c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default LableFill;
