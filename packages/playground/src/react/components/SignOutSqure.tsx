import React, { SVGProps } from "react";

export function SignOutSqure(props: SVGProps<SVGSVGElement>) {
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
                d="m2 12-.7809-.6247L.7194 12l.4997.6247L2 12Zm9 1c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM5.2191 6.3753l-4 5 1.5618 1.2494 4-5L5.219 6.3753Zm-4 6.2494 4 5 1.5618-1.2494-4-5-1.5618 1.2494ZM2 13h9v-2H2v2Z"
            />
            <path
                stroke="currentColor"
                d="M10 8.132v-.7435c0-1.6183 0-2.4275.474-2.987.4739-.5595 1.2721-.6925 2.8684-.9586l1.6712-.2785c3.2431-.5405 4.8646-.8108 5.9255.088C22 4.151 22 5.7948 22 9.0827v5.8344c0 3.2879 0 4.9318-1.0609 5.8305-1.0609.8987-2.6824.6284-5.9255.0879l-1.6712-.2785c-1.5963-.2661-2.3945-.3991-2.8684-.9586C10 19.039 10 18.2298 10 16.6115v-.5455"
                strokeWidth="2"
            />
        </svg>
    );
}
export default SignOutSqure;
