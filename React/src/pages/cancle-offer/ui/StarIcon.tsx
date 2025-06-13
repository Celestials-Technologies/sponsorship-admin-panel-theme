import { SVGProps, memo } from "react"
const StarIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        fill="none"
        className="pt-1.5 pl-0.5"
        {...props}
    >
        <path
            fill="#D9D9D9"
            d="M5.432.377a.106.106 0 0 1 .197 0L6.95 3.59a.106.106 0 0 0 .094.066l3.748.15c.101.003.14.133.058.192L7.931 6.108a.107.107 0 0 0-.04.117l1 3.279a.106.106 0 0 1-.156.122L5.585 7.73a.106.106 0 0 0-.11 0l-3.15 1.895a.106.106 0 0 1-.156-.122l1-3.279a.106.106 0 0 0-.04-.117L.21 3.997a.106.106 0 0 1 .058-.193l3.748-.149a.106.106 0 0 0 .094-.066L5.432.377Z"
        />
    </svg>
)
const Memo = memo(StarIcon)
export default Memo
