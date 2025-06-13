import { SVGProps, memo } from "react"
const StartupPlanIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        fill="none"
        {...props}
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M14.61 14.641 18.938 19m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        />
    </svg>
)
const Memo = memo(StartupPlanIcon)
export default Memo
