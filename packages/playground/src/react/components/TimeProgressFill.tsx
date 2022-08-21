import React, { SVGProps } from "react";

export function TimeProgressFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <mask
                id="a"
                width="22"
                height="22"
                x="1"
                y="1"
                fill="currentColor"
                maskUnits="userSpaceOnUse"
            >
                <path fill="currentColor" d="M1 1h22v22H1z" />
                <path d="M12 2a9.9998 9.9998 0 0 1 9.8079 8.0491 10.0004 10.0004 0 0 1-5.9811 11.1897 9.9995 9.9995 0 0 1-12.1415-3.6831A10 10 0 0 1 4.929 4.9289l2.8284 2.8285a5.9998 5.9998 0 0 0 2.5009 9.9842 5.9998 5.9998 0 0 0 7.6264-6.9121A6 6 0 0 0 12 6V2Z" />
            </mask>
            <path
                fill="currentColor"
                d="M12 2a9.9998 9.9998 0 0 1 9.8079 8.0491 10.0004 10.0004 0 0 1-5.9811 11.1897 9.9995 9.9995 0 0 1-12.1415-3.6831A10 10 0 0 1 4.929 4.9289l2.8284 2.8285a5.9998 5.9998 0 0 0 2.5009 9.9842 5.9998 5.9998 0 0 0 7.6264-6.9121A6 6 0 0 0 12 6V2Z"
            />
            <path
                fill="currentColor"
                d="M12 2V1h-1v1h1Zm6.3439 2.2699.6344-.773-.6344.773Zm2.4753 12.4441.8819.4714-.8819-.4714Zm-4.9924 4.5248.3827.9239-.3827-.9239Zm-6.7296.3306-.2903.9569.2903-.9569Zm-5.4119-4.0137-.8314.5556.8314-.5556Zm-1.6371-6.5359-.9952-.098.9952.098ZM4.929 4.9289l.707-.707-.707-.7072-.7072.7071.7072.7071Zm2.8284 2.8285.707.707.7072-.707-.7071-.7071-.7071.707Zm-1.7285 3.6545-.9952-.098.9952.098Zm.9823 3.9215-.8315.5556.8315-.5556Zm3.2471 2.4082-.2903.957.2903-.957Zm4.0378-.1983-.3827-.9239.3827.9239Zm2.9954-2.7149-.8819-.4714.8819.4714Zm.5932-3.9989-.9808.195.9808-.195Zm-2.0783-3.4676.6344-.773-.6344.773ZM12 6h-1v1h1V6Zm0-3a9 9 0 0 1 5.7096 2.043l1.2687-1.5461A10.9998 10.9998 0 0 0 12 1v2Zm5.7096 2.043a9.0002 9.0002 0 0 1 3.1175 5.2012l1.9616-.3902a10.9999 10.9999 0 0 0-3.8104-6.3571l-1.2687 1.546Zm3.1175 5.2012a9.0005 9.0005 0 0 1-.8898 5.9984l1.7638.9428a11.0004 11.0004 0 0 0 1.0876-7.3314l-1.9616.3902Zm-.8898 5.9984a8.9997 8.9997 0 0 1-4.4931 4.0723l.7653 1.8478a10.9997 10.9997 0 0 0 5.4916-4.9773l-1.7638-.9428Zm-4.4931 4.0723a9.0004 9.0004 0 0 1-6.0568.2976l-.5805 1.9138a10.9996 10.9996 0 0 0 7.4026-.3636l-.7653-1.8478Zm-6.0568.2976a9.0003 9.0003 0 0 1-4.8706-3.6124l-1.663 1.1112a10.9997 10.9997 0 0 0 5.953 4.415l.5806-1.9138Zm-4.8706-3.6124a9 9 0 0 1-1.4734-5.8823l-1.9904-.196a11 11 0 0 0 1.8009 7.1895l1.6629-1.1112Zm-1.4734-5.8823A9 9 0 0 1 5.636 5.636L4.2218 4.2218a11 11 0 0 0-3.1688 6.7l1.9904.196ZM4.2218 5.636l2.8285 2.8285 1.4142-1.4142L5.636 4.2218 4.2218 5.636Zm2.8285 1.4143a7 7 0 0 0-2.0166 4.2636l1.9904.196a5 5 0 0 1 1.4404-3.0454L7.0503 7.0503Zm-2.0166 4.2636a7 7 0 0 0 1.146 4.5751l1.663-1.1111a5.0003 5.0003 0 0 1-.8186-3.268l-1.9904-.196Zm1.146 4.5751a7.0002 7.0002 0 0 0 3.7883 2.8096l.5806-1.9139a5 5 0 0 1-2.706-2.0068L6.1798 15.889Zm3.7883 2.8096a7.0004 7.0004 0 0 0 4.7108-.2314l-.7654-1.8478a4.9997 4.9997 0 0 1-3.3648.1653l-.5806 1.9139Zm4.7108-.2314a7.001 7.001 0 0 0 3.4947-3.1674l-1.7639-.9428a4.9997 4.9997 0 0 1-2.4962 2.2624l.7654 1.8478Zm3.4947-3.1674a6.9999 6.9999 0 0 0 .692-4.6654l-1.9616.3901a5 5 0 0 1-.4943 3.3325l1.7639.9428Zm.692-4.6654a7 7 0 0 0-2.4247-4.0455L15.172 8.135a4.9995 4.9995 0 0 1 1.7319 2.8896l1.9616-.3901Zm-2.4247-4.0455A7.0002 7.0002 0 0 0 12 5v2a5 5 0 0 1 3.172 1.135l1.2688-1.546ZM13 6V2h-2v4h2Z"
                mask="url(#a)"
            />
            <path stroke="currentColor" d="M12 12 5 5" strokeWidth="2" />
        </svg>
    );
}
export default TimeProgressFill;
