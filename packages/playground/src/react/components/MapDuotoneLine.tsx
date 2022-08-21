import React, { SVGProps } from "react";

export function MapDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="m4.5 7.5 4-2v10l-3 1.5h-1V7.5Zm15 8-4 2v-10l3-1.5h1v9.5Z"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="M19.5 15.2219V6.2281c0-.3345-.352-.552-.6512-.4025l-3.1922 1.5961a.4501.4501 0 0 1-.3249.0302L8.6683 5.5481a.45.45 0 0 0-.3249.0302L4.7487 7.3756a.45.45 0 0 0-.2487.4025v8.9938c0 .3345.352.5521.6513.4025l3.1921-1.5961a.4499.4499 0 0 1 .325-.0302l6.6633 1.9038a.45.45 0 0 0 .3249-.0302l3.5946-1.7973a.45.45 0 0 0 .2488-.4025Zm-4 2.2781v-10m-7 8v-10"
            />
        </svg>
    );
}
export default MapDuotoneLine;
