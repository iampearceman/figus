import React, { SVGProps } from "react";

export function HideEye(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M6.8874 5.1716c.578-.578.867-.8671 1.2346-1.0194C8.4896 4 8.8983 4 9.7158 4h4.6102c.8257 0 1.2386 0 1.6091.155.3705.1551.6603.4492 1.2399 1.0373l1.674 1.6987c.5681.5765.8521.8647 1.0015 1.2292C20 8.4848 20 8.8894 20 9.6987v4.6444c0 .8175 0 1.2263-.1522 1.5938-.1523.3676-.4413.6566-1.0194 1.2347l-1.6568 1.6568c-.5781.5781-.8671.8671-1.2347 1.0194C15.5694 20 15.1606 20 14.3431 20H9.6987c-.8093 0-1.2139 0-1.5785-.1495-.3645-.1494-.6528-.4334-1.2292-1.0015l-1.6986-1.674c-.5882-.5796-.8823-.8694-1.0373-1.2399C4 15.5646 4 15.1517 4 14.326V9.7158c0-.8175 0-1.2262.1522-1.5938.1523-.3675.4413-.6565 1.0194-1.2346l1.7158-1.7158Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="M8.4472 10.1056c-.494-.247-1.0946-.0468-1.3416.4472-.247.494-.0468 1.0946.4472 1.3416l.8944-1.7888Zm8 1.7888c.494-.247.6942-.8476.4472-1.3416-.247-.494-.8476-.6942-1.3416-.4472l.8944 1.7888Zm-8.8944 0 .4223.2112.8944-1.7889-.4223-.2111-.8944 1.7888Zm8.4721.2112.4223-.2112-.8944-1.7888-.4223.2111.8944 1.7889Zm-8.0498 0a9.0004 9.0004 0 0 0 8.0498 0l-.8944-1.7889a6.9997 6.9997 0 0 1-6.261 0l-.8944 1.7889Z"
            />
            <path
                stroke="currentColor"
                d="M12 12.5V14m-3-2-.5 1m6.5-1 .5 1"
                strokeWidth="2"
            />
        </svg>
    );
}
export default HideEye;
