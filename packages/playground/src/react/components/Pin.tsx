import React, { SVGProps } from "react";

export function Pin(props: SVGProps<SVGSVGElement>) {
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
                stroke="currentColor"
                d="M14.6358 3.9095c.653-.4354.9795-.653 1.3353-.6178.3558.0352.6333.3127 1.1883.8677l2.6812 2.6812c.555.555.8325.8325.8677 1.1883.0353.3558-.1824.6823-.6178 1.3353l-1.6486 2.473c-.5619.8428-.8428 1.2641-1.067 1.7139a8.0052 8.0052 0 0 0-.4273 1.0314c-.1594.4766-.2587.9732-.4574 1.9664l-.191.9549-.0012.0063c-.1424.7029-.9566 1.0318-1.5472.625l-.0053-.0036-.0266-.0184a35.0007 35.0007 0 0 1-8.8504-8.8586c-.002-.0028-.003-.0042-.0036-.0053-.4067-.5906-.0779-1.4048.625-1.5472l.0063-.0012.955-.191c.9931-.1987 1.4897-.298 1.9663-.4574a7.9973 7.9973 0 0 0 1.0314-.4273c.4498-.2242.8711-.5051 1.7139-1.067l2.473-1.6486Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m5 19 4.5-4.5"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Pin;
