import * as React from "react"
import { SVGProps, memo } from "react"
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.5em"
        fill="none"
        {...props}
    >
        <path
            fill="#FFA51F"
            fillRule="evenodd"
            d="M8.686 24V13.2h3.278l.536-4.8H8.686V6.062c0-1.236.031-2.462 1.758-2.462h1.75V.168C12.194.117 10.69 0 9.17 0 5.996 0 4.008 1.989 4.008 5.64V8.4H.5v4.8h3.508V24h4.678Z"
            clipRule="evenodd"
        />
    </svg>
)
const Memo = memo(FacebookIcon)
export default Memo
