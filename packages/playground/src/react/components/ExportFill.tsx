import React, { SVGProps } from "react";

export function ExportFill(props: SVGProps<SVGSVGElement>) {
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
                d="m12 5-.7071-.7071L12 3.5858l.7071.707L12 5ZM6.2929 9.2929l5-5 1.4142 1.4142-5 5L6.293 9.2929Zm6.4142-5 5 5-1.4142 1.4142-5-5 1.4142-1.4142ZM13 5v6.5h-2V5h2Z"
            />
            <path
                fill="currentColor"
                d="M11 13v3.5c0 .5523.4477 1 1 1s1-.4477 1-1V13h5c1.1046 0 2 .8954 2 2v4c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2v-4c0-1.1046.8954-2 2-2h5Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default ExportFill;
