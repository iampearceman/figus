import React, { SVGProps } from "react";

export function SignIn(props: SVGProps<SVGSVGElement>) {
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
                d="M12 22c5.5229 0 10-4.4772 10-10 0-5.5229-4.4771-10-10-10-5.1853 0-9.4489 3.9467-9.9506 9h9.5364L8.2929 7.7071 9.7071 6.293l5 5 .7071.7071-.7071.7071-5 5-1.4142-1.4142L11.5858 13H2.0494C2.551 18.0533 6.8146 22 12 22Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default SignIn;
