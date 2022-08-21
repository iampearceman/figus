import React, { SVGProps } from "react";

export function DimondAlt(props: SVGProps<SVGSVGElement>) {
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
                d="m12 20-7.3203-9.1504c-.3325-.4156-.4988-.6234-.5434-.8739-.0447-.2505.0394-.503.2078-1.008l.7442-2.2326c.44-1.32.66-1.98 1.1838-2.3576C6.7959 4 7.4916 4 8.8831 4h6.2339c1.3914 0 2.0871 0 2.6109.3775s.7438 1.0375 1.1838 2.3576l.7442 2.2327c.1684.505.2525.7574.2078 1.0079-.0446.2505-.2109.4583-.5434.8739L12 20Zm0 0 3.5-11M12 20 8.5 9m11 1-4-1m0 0L14 5m1.5 4h-7M10 5 8.5 9m0 0-4 1"
                strokeWidth="2"
            />
        </svg>
    );
}
export default DimondAlt;
