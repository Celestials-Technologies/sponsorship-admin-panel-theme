import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="#025a03"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="m4.892 13.269 4.274 4.274L18.709 8"
        />
    </svg>
)
const Memo = memo(SvgComponent)
export default Memo
