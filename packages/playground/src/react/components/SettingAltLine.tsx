import React, { SVGProps } from "react";

export function SettingAltLine(props: SVGProps<SVGSVGElement>) {
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
                d="M3.0817 13.9445c-.5287-.9504-.793-1.4257-.793-1.9445 0-.5188.2643-.9941.793-1.9445L4.4309 7.63l1.426-2.3812c.5587-.9331.838-1.3997 1.2874-1.6591.4493-.2594.993-.2681 2.0805-.2854L12 3.26l2.7752.0443c1.0874.0173 1.6312.026 2.0805.2854.4493.2594.7287.726 1.2874 1.659l1.426 2.3813 1.3492 2.4255c.5287.9504.7931 1.4257.7931 1.9445 0 .5188-.2644.9941-.7931 1.9445L19.5691 16.37l-1.426 2.3812c-.5587.9331-.8381 1.3997-1.2874 1.6591-.4493.2594-.9931.2681-2.0805.2854L12 20.74l-2.7752-.0443c-1.0874-.0173-1.6312-.026-2.0805-.2854-.4493-.2594-.7287-.726-1.2875-1.6591L4.431 16.37l-1.3492-2.4255Z"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
}
export default SettingAltLine;
