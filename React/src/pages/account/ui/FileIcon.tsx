import { SVGProps, memo } from "react"
const FileIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5em"
        height="5em"
        fill="none"
        {...props}
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3.111}
            d="M15.222 2H6.667A4.667 4.667 0 0 0 2 6.667v18.666A4.667 4.667 0 0 0 6.667 30h4.666m3.89-28 8.555 8.75M15.222 2v7.194c0 .86.697 1.556 1.556 1.556h7m0 0v4.958M20.667 20.667v4.667m0 0V30m0-4.666H16m4.667 0h4.666"
        />
    </svg>
)
const Memo = memo(FileIcon)
export default Memo
