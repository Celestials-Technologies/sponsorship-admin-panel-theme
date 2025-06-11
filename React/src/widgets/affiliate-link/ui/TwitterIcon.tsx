import * as React from "react"
import { SVGProps, memo } from "react"
const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.5em"
        fill="none"
        {...props}
    >
        <path
            fill="#FFA51F"
            d="m.046 0 7.336 9.928L0 18h1.661l6.463-7.067L13.346 18H19L11.251 7.514 18.122 0h-1.661l-5.952 6.509L5.7 0H.046ZM2.49 1.239h2.597l11.47 15.522h-2.598L2.49 1.24Z"
        />
    </svg>
)
const Memo = memo(TwitterIcon)
export default Memo
