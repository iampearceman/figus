import React, { SVGProps } from "react";

export function Rain(props: SVGProps<SVGSVGElement>) {
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
                d="m7.436 5.9548-.9123-.4095.9124.4095Zm9.1279 0-.9123.4095.9123-.4095ZM12 12H6v2h6v-2Zm6 0h-6v2h6v-2Zm2-2c0 1.1046-.8954 2-2 2v2c2.2091 0 4-1.7909 4-4h-2Zm-2-2c1.1046 0 2 .8954 2 2h2c0-2.2091-1.7909-4-4-4v2Zm-.5237-2.4547C16.5392 3.4574 14.4409 2 12 2v2c1.6247 0 3.0253.9687 3.6516 2.3643l1.8247-.819ZM12 2C9.5591 2 7.4608 3.4574 6.5237 5.5453l1.8247.819C8.9747 4.9687 10.3753 4 12 4V2ZM6 6c-2.2091 0-4 1.7909-4 4h2c0-1.1046.8954-2 2-2V6Zm-4 4c0 2.2091 1.7909 4 4 4v-2c-1.1046 0-2-.8954-2-2H2Zm4.5237-4.4547C6.369 5.8903 6.1293 6 6 6v2c1.1507 0 1.979-.8128 2.3484-1.6357l-1.8247-.819ZM18 6c-.1293 0-.3689-.1097-.5237-.4547l-1.8247.819C16.021 7.1872 16.8493 8 18 8V6Z"
            />
            <path
                stroke="currentColor"
                d="M12 19v-2m5 3v-3M7 21v-4"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Rain;
