import React, { SVGProps } from "react";

export function Lightning(props: SVGProps<SVGSVGElement>) {
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
                d="m16.2777 10.6615.8427-.5384c.3795.5939.2946 1.2223.1528 1.704-.1323.4491-.3807.9857-.6514 1.57l-.0293.0633-2.7313 5.8997-.0223.0482c-.1676.3622-.3271.7067-.4733.9503-.0739.123-.1921.3039-.3638.4535-.1902.1658-.5523.3767-1.0207.2736-.4684-.1032-.7083-.4467-.8113-.6771-.0929-.2079-.1242-.4217-.1395-.5644-.0304-.2825-.0304-.6621-.0303-1.0612V14.8h-.9398c-.644.0001-1.2353.0002-1.6984-.0685-.4967-.0737-1.1027-.2607-1.4822-.8546m9.3981-3.2154-9.398 3.2154m9.398-3.2154.8427-.5384c-.3795-.594-.9855-.781-1.4822-.8546-.4631-.0687-1.0544-.0686-1.6984-.0685H13V5.2171c.0001-.3992.0001-.7788-.0303-1.0613-.0153-.1427-.0466-.3565-.1395-.5644-.103-.2304-.3429-.574-.8113-.677-.4684-.1032-.8305.1077-1.0207.2735-.1717.1496-.2899.3305-.3638.4535-.1462.2436-.3057.5881-.4733.9504l-.0223.0481-2.7313 5.8997a42.0224 42.0224 0 0 1-.0293.0633c-.2706.5843-.5191 1.1209-.6514 1.57-.1418.4817-.2267 1.1101.1528 1.704m9.3981-3.2154-9.398 3.2154m5.4956-9.2466Zm-1.4002-.3056Zm.6496 15.045.0019-.0026-.0019.0026Zm1.4008.3085-.0006-.0029a.3282.3282 0 0 1 .0006.0029Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Lightning;
