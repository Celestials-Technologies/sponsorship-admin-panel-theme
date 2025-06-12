import { SVGProps, memo } from "react"

interface CrossIconProps extends SVGProps<SVGSVGElement> {
    color?: string
    size?: string | number
}

const CrossIcon = ({ color = "#830101", size = "1em", ...props }: CrossIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill={color}
            d="M6.995 7.006a1 1 0 0 0 0 1.415l3.585 3.585-3.585 3.585a1 1 0 1 0 1.414 1.414l3.585-3.585 3.585 3.585a1 1 0 0 0 1.415-1.414l-3.586-3.585 3.586-3.585a1 1 0 0 0-1.415-1.415l-3.585 3.585L8.41 7.006a1 1 0 0 0-1.414 0Z"
        />
    </svg>
)

export default memo(CrossIcon)
