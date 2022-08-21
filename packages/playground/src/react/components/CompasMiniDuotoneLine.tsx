import React, { SVGProps } from "react";

export function CompasMiniDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="m7.7619 18.5397.0822.4932-.0822-.4932ZM18.5397 7.7619l.4932.0822-.4932-.0822Zm-7.3123-1.4665.0822.4932-.0822-.4932Zm-4.932 4.932.4932.0822-.4932-.0822Zm10.916 1.463.8351-5.0107.9864.1644-.8351 5.0107-.9864-.1644Zm-.8911-6.7369-5.0107.8351-.1644-.9864 5.0107-.835.1644.9863Zm-9.5317 5.3561-.835 5.0107-.9865-.1644.8351-5.0107.9864.1644Zm.8911 6.7369 5.0107-.8351.1644.9864-5.0107.8351-.1644-.9864Zm-1.7262-1.7262c-.1692 1.0152.711 1.8954 1.7262 1.7262l.1644.9864c-1.692.282-3.159-1.1849-2.877-2.877l.9864.1644Zm12.093-8.6406c.1692-1.0152-.711-1.8954-1.7262-1.7262l-.1644-.9864c1.6921-.282 3.159 1.185 2.877 2.877l-.9864-.1644Zm.1513 5.1751c-.4566 2.7396-2.6034 4.8864-5.343 5.343l-.1644-.9864c2.3181-.3864 4.1346-2.2029 4.521-4.521l.9864.1644Zm-6.8882-6.0662c-2.3181.3864-4.1346 2.2029-4.521 4.521l-.9864-.1644c.4566-2.7396 2.6034-4.8864 5.343-5.343l.1644.9864Z"
            />
            <circle
                cx="12"
                cy="12"
                r="2.5"
                stroke="currentColor"
                strokeOpacity=".24"
            />
        </svg>
    );
}
export default CompasMiniDuotoneLine;
