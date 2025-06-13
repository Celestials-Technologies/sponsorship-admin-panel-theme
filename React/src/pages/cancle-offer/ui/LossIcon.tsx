import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        fill="none"
        {...props}
    >
        <circle cx={13.295} cy={12.804} r={11.713} stroke="red" />
        <path stroke="red" d="M5.141 20.521 22.177 5.614" />
    </svg>
)
const Memo = memo(SvgComponent)
export default Memo
