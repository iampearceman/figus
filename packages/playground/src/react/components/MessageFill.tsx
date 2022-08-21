import React, { SVGProps } from "react";

export function MessageFill(props: SVGProps<SVGSVGElement>) {
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
                d="M3.8787 5.8787C3 6.7574 3 8.1716 3 11v2c0 2.8284 0 4.2426.8787 5.1213C4.7574 19 6.1716 19 9 19h6c2.8284 0 4.2426 0 5.1213-.8787C21 17.2426 21 15.8284 21 13v-2c0-2.8284 0-4.2426-.8787-5.1213C19.2426 5 17.8284 5 15 5H9c-2.8284 0-4.2426 0-5.1213.8787Zm2.676 2.2892c-.4595-.3063-1.0804-.1821-1.3868.2774-.3063.4595-.1821 1.0804.2774 1.3868l5.4453 3.6301a1.9999 1.9999 0 0 0 2.2188 0l5.4453-3.6301c.4595-.3064.5837-.9273.2774-1.3868-.3064-.4595-.9273-.5837-1.3868-.2774L12 11.7982 6.5547 8.1679Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default MessageFill;
