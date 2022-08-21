import React, { SVGProps } from "react";

export function ViewHideFill(props: SVGProps<SVGSVGElement>) {
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
                d="M18.2371 15.1157c.8113-.7324 1.4766-1.4741 1.9509-2.05.3882-.4713.5823-.7069.5823-1.0657 0-.3588-.1941-.5944-.5823-1.0657C18.768 9.2101 15.6357 6 12 6c-.8395 0-1.6521.1711-2.423.4556l2.5468 2.547c1.5584.0632 2.8104 1.3152 2.8737 2.8736l3.2396 3.2395Zm-8.844-4.6013A2.9863 2.9863 0 0 0 9 12c0 1.6569 1.3431 3 2.9999 3a2.9856 2.9856 0 0 0 1.4856-.3931l2.3016 2.3016C14.636 17.5555 13.3529 18 12 18c-3.6357 0-6.768-3.2101-8.188-4.9343-.3882-.4713-.5823-.7069-.5823-1.0657 0-.3588.1941-.5944.5823-1.0657.6734-.8176 1.7319-1.9694 3.0464-2.9546l2.5347 2.5347Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="m5 2 16 16" strokeWidth="2" />
        </svg>
    );
}
export default ViewHideFill;
