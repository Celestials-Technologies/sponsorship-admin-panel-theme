import { SVGProps, memo } from "react"
const OpportunitiesIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.7em"
        height="1.4em"
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M17.466 8.93v6.37H4.735V8.894H3.508v10.164H18.71V8.93h-1.244Z"
            clipRule="evenodd"
        />
        <path fill="#fff" d="M17.316 0H4.734v1.18h12.582V0Z" />
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M17.816 3.813 17.421 2.6H4.762l-.427 1.213L.938 8.007l1.694.849H4.71V7.545h1.324v1.311H8.52V7.545h1.324v1.311h2.488V7.545h1.324v1.311h2.488V7.545h1.324v1.311h2.105l1.64-.849-3.397-4.194Z"
            clipRule="evenodd"
        />
    </svg>
)
const Memo = memo(OpportunitiesIcon)
export default Memo
