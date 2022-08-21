import React, { SVGProps } from "react";

export function LampFill(props: SVGProps<SVGSVGElement>) {
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
                d="M14.8562 15.6858a11.6596 11.6596 0 0 0-.1.2505 8.6961 8.6961 0 0 1-5.5124-.0001 11.2982 11.2982 0 0 0-.1-.2504c-.0953-.2304-.1429-.3457-.2254-.4521-.0825-.1064-.2265-.2144-.5145-.4304C6.9443 13.7089 6 11.9647 6 10c0-3.3137 2.6863-6 6-6s6 2.6863 6 6c0 1.9647-.9443 3.7089-2.4039 4.8033v.0001c-.288.2159-.432.3239-.5145.4303-.0825.1064-.1301.2217-.2254.4521Zm-5.006 2.4806c.0867.5268.1361 1.0606.1473 1.5975.0031.1447.0842.277.2136.3417a4.0005 4.0005 0 0 0 3.5778 0c.1294-.0647.2105-.197.2136-.3417a11.285 11.285 0 0 1 .1473-1.5974 10.7024 10.7024 0 0 1-4.2996-.0001Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default LampFill;
