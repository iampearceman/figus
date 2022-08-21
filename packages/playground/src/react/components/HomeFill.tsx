import React, { SVGProps } from "react";

export function HomeFill(props: SVGProps<SVGSVGElement>) {
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
                d="M5.2745 10.1262C5 10.7229 5 11.4018 5 12.7595v4.2404c0 1.8857 0 2.8285.5858 3.4143.5315.5315 1.357.5807 2.9142.5853V16c0-1.1046.8954-2 2-2h3c1.1046 0 2 .8954 2 2v4.9995c1.5572-.0046 2.3827-.0538 2.9142-.5853C19 19.8284 19 18.8856 19 16.9999v-4.2404c0-1.3577 0-2.0366-.2745-2.6333-.2744-.5968-.7899-1.0386-1.8208-1.9222l-1-.8571C14.0414 5.7497 13.1098 4.9512 12 4.9512s-2.0414.7985-3.9047 2.3957l-1 .8571c-1.031.8836-1.5464 1.3254-1.8208 1.9222ZM13.5 20.9999V16h-3v4.9999h3Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default HomeFill;
