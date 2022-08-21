import React, { SVGProps } from "react";

export function Cloud(props: SVGProps<SVGSVGElement>) {
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
                d="m8.9902 19.9818.0744.9972-.0744-.9972Zm-.0744-.9972A5.6041 5.6041 0 0 1 8.5 19v2c.1897 0 .378-.0071.5646-.021l-.1488-1.9944ZM8.5 19C5.4624 19 3 16.5376 3 13.5H1C1 17.6421 4.3579 21 8.5 21v-2ZM3 13.5C3 10.4624 5.4624 8 8.5 8V6C4.3579 6 1 9.3579 1 13.5h2ZM8.5 8c2.2499 0 4.1865 1.3511 5.0384 3.2903l1.8311-.8044C14.21 7.8465 11.5717 6 8.5 6v2Zm7.5 5c1.6569 0 3 1.3431 3 3h2c0-2.7614-2.2386-5-5-5v2Zm3 3c0 1.6569-1.3431 3-3 3v2c2.7614 0 5-2.2386 5-5h-2Zm-3 3H9.0091v2H16v-2Zm-6.9909 0c.5472 0 .9909.4436.9909.9909H8C8 20.5482 8.4518 21 9.0091 21v-2Zm4.5293-7.7097C13.9313 12.1847 14.8177 13 16 13v-2c-.1936 0-.47-.1488-.6305-.5141l-1.8311.8044ZM9.0646 20.979C8.4907 21.0218 8 20.568 8 19.9909h2c0-.5878-.4998-1.0499-1.0842-1.0063l.1487 1.9944Z"
            />
            <path
                stroke="currentColor"
                d="M17.8785 12.9023a3.9994 3.9994 0 0 0 3.0201-3.0074A4.0002 4.0002 0 0 0 15.2565 5.4 4.0003 4.0003 0 0 0 13 9.0158"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Cloud;
