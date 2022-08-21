import React, { SVGProps } from "react";

export function TimeAtackDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill="currentColor"
                fillOpacity=".24"
            />
            <path
                fill="currentColor"
                d="M12 5.3c0-.1426 0-.2139.0462-.2582.0463-.0443.1154-.0413.2537-.0354A6.9998 6.9998 0 0 1 19 12a6.9995 6.9995 0 0 1-3.5 6.0622 6.9995 6.9995 0 0 1-7 0 6.9996 6.9996 0 0 1-2.4066-2.3057c-.0743-.1168-.1115-.1752-.0962-.2374.0152-.0622.077-.0978.2004-.1691l5.6524-3.2634c.0732-.0423.1098-.0634.1299-.0982.0201-.0348.0201-.0771.0201-.1616V5.3Z"
            />
        </svg>
    );
}
export default TimeAtackDuotone;
