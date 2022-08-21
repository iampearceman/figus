import React, { SVGProps } from "react";

export function BellPinLight(props: SVGProps<SVGSVGElement>) {
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
                d="M14.3752 3.9816A6.0693 6.0693 0 0 0 12 3.5c-3.1012 0-5.7066 2.3319-6.049 5.4142l-.2519 2.2662-.0062.0559a7.4999 7.4999 0 0 1-1.006 2.9805l-.029.0482-.578.9634-.014.0232c-.2503.4174-.4578.7631-.5926 1.0494-.1361.2889-.241.6015-.1887.9328a1.5 1.5 0 0 0 .5189.9164c.2571.2153.5791.2862.897.3181.3148.0317.718.0317 1.2047.0317h12.1897c.4867 0 .8899 0 1.2048-.0317.3178-.0319.6398-.1028.8969-.3181a1.4996 1.4996 0 0 0 .5189-.9164c.0523-.3313-.0526-.6439-.1887-.9328-.1348-.2863-.3422-.632-.5926-1.0493l-.0001-.0001-.0139-.0232-.5781-.9634-.0288-.0482a7.5 7.5 0 0 1-1.0061-2.9805l-.0063-.0559-.0424-.3824a3.9863 3.9863 0 0 1-.9848.1928l.0334.3001.0066.0594a8.4996 8.4996 0 0 0 1.1402 3.3779l.0307.0513.5781.9634c.2679.4465.4486.7489.5594.9842.112.2378.11.3233.1056.3508a.4997.4997 0 0 1-.1729.3055c-.0214.0179-.0936.0636-.3552.09-.2588.026-.6111.0266-1.1318.0266H5.9323c-.5207 0-.873-.0006-1.1318-.0266-.2616-.0264-.3338-.0721-.3552-.09a.5.5 0 0 1-.173-.3055c-.0043-.0275-.0064-.113.1057-.3508.1107-.2353.2915-.5377.5594-.9842l.578-.9634.0308-.0513a8.4998 8.4998 0 0 0 1.1402-3.3779l.0066-.0594.2518-2.2663C7.231 6.4488 9.4083 4.5 12 4.5c.5837 0 1.1464.0988 1.6711.2814a4.022 4.022 0 0 1 .7041-.7998Zm1.8141 1.1896a2.0071 2.0071 0 0 0-.7909.6307c.8948.8035 1.506 1.923 1.654 3.1974a1.9897 1.9897 0 0 0 .9718-.281c-.2008-1.398-.8692-2.631-1.8349-3.5471Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M9.1022 18.4059c.171.7442.5476 1.4018 1.0715 1.8708C10.6976 20.7458 11.3396 21 12 21c.6604 0 1.3024-.2542 1.8263-.7233.5239-.469.9006-1.1266 1.0715-1.8708"
            />
            <circle cx="17" cy="7" r="2" fill="currentColor" />
        </svg>
    );
}
export default BellPinLight;
