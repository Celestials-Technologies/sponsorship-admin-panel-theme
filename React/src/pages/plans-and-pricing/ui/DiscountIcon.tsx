import { SVGProps, memo } from "react"
const DiscountIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        {...props}
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth={3.636}
            d="M13.052 2.549 2.826 15.33"
        />
        <circle cx={3.466} cy={4.466} r={2.556} fill="#fff" />
        <circle cx={12.413} cy={13.413} r={2.556} fill="#fff" />
    </svg>
)
const Memo = memo(DiscountIcon)
export default Memo
