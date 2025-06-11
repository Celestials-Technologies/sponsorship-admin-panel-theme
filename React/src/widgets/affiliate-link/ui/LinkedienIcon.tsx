import * as React from "react"
import { SVGProps, memo } from "react"
const LinkedienIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M21.5 21.5h-4.2v-7.349c0-2.016-.89-3.14-2.484-3.14-1.736 0-2.766 1.171-2.766 3.14V21.5h-4.2V7.85h4.2v1.535s1.318-2.312 4.287-2.312c2.97 0 5.163 1.812 5.163 5.563V21.5ZM3.064 5.667A2.574 2.574 0 0 1 .5 3.083 2.574 2.574 0 0 1 3.064.5a2.574 2.574 0 0 1 2.563 2.583 2.573 2.573 0 0 1-2.563 2.584ZM.5 21.5h5.25V7.85H.5V21.5Z"
            clipRule="evenodd"
        />
    </svg>
)
const Memo = memo(LinkedienIcon)
export default Memo
