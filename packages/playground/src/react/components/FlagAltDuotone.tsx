import React, { SVGProps } from "react";

export function FlagAltDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M6 5.5V15h10.7929c.5137 0 .7706 0 .8345-.1543.0639-.1544-.1177-.336-.481-.6993l-3.8636-3.8636c-.1333-.1333-.2-.2-.2-.2828 0-.0828.0667-.1495.2-.2828l3.8636-3.8636c.3633-.3633.5449-.545.481-.6993C17.5635 5 17.3066 5 16.7929 5H6.5c-.2357 0-.3536 0-.4268.0732C6 5.1464 6 5.2643 6 5.5Z"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="M6 15V5.5c0-.2357 0-.3536.0732-.4268C6.1464 5 6.2643 5 6.5 5h10.2929c.5137 0 .7706 0 .8345.1543.0639.1544-.1177.336-.481.6993l-3.8636 3.8636c-.1333.1333-.2.2-.2.2828 0 .0828.0667.1495.2.2828l3.8636 3.8636c.3633.3633.5449.5449.481.6993-.0639.1543-.3208.1543-.8345.1543H6Zm0 0v4"
                strokeWidth="1.4"
            />
        </svg>
    );
}
export default FlagAltDuotone;
