import React, { SVGProps } from "react";

export function Trophy(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path stroke="currentColor" d="M16.5 20.5h-9" strokeWidth="2" />
            <path
                fill="currentColor"
                d="M13 18.5c0 .5523-.4477 1-1 1s-1-.4477-1-1h2Zm-2 0V16h2v2.5h-2Z"
            />
            <path
                stroke="currentColor"
                d="M10.5 9.5h3m-8 5s-2-1.5-2-4V8.4994C3.5 7.395 4.3954 6.5 5.5 6.5s2 .8954 2 2v1m11 5s2-1.5 2-4V8.4994c0-1.1045-.8954-1.9994-2-1.9994s-2 .8954-2 2v1"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M12.5547 16.1302 12 15.2981l.5547.8321Zm-3.2735-1.4427.5547-.8321-.5547.8321Zm5.4376 0-.5547-.8321.5547.8321ZM15.5 7.5v3.8593h2V7.5h-2Zm-7 3.8593V7.5h-2v3.8593h2Zm5.6641 2.4961L12 15.2981l1.1094 1.6641 2.1641-1.4427-1.1094-1.6641ZM12 15.2981l-2.1641-1.4427-1.1094 1.6641 2.1641 1.4427L12 15.2981ZM14.5 4.5h-5v2h5v-2ZM12 15.2981l-1.1094 1.6641a1.9999 1.9999 0 0 0 2.2188 0L12 15.2981Zm-5.5-3.9388a5 5 0 0 0 2.2265 4.1602l1.1094-1.6641A3 3 0 0 1 8.5 11.3593h-2Zm9 0a3 3 0 0 1-1.3359 2.4961l1.1094 1.6641A5 5 0 0 0 17.5 11.3593h-2ZM8.5 7.5c0-.5523.4477-1 1-1v-2c-1.6569 0-3 1.3431-3 3h2Zm9 0c0-1.6569-1.3431-3-3-3v2c.5523 0 1 .4477 1 1h2Z"
            />
        </svg>
    );
}
export default Trophy;
