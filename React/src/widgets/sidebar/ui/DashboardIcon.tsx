import * as React from "react"
import { SVGProps, memo } from "react"
const DashboardIco = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M11.605 19c1.149 0 2.135-.066 2.958-.265.834-.203 1.557-.555 2.121-1.17.564-.616.887-1.404 1.073-2.314.183-.899.243-1.974.243-3.227V9c0-1.105-.82-2-1.833-2H8.833C7.821 7 7 7.895 7 9v8c0 1.105.82 2 1.833 2h2.772ZM0 12.1c0 1.273.055 2.365.221 3.277.169.924.463 1.725.975 2.35.513.624 1.17.982 1.928 1.187.073.02.146.038.22.055C4.246 19.183 5 18.25 5 17.13V9.03C5 7.909 4.254 7 3.333 7H1.667C.747 7 0 7.91 0 9.03v3.07ZM6.224 0C5.075 0 4.09.055 3.265.221c-.834.169-1.557.463-2.121.975C.58 1.71.257 2.366.071 3.124c-.015.063-.03.125-.043.188C-.168 4.227.688 5 1.715 5H16.31c1.013 0 1.855-.753 1.663-1.657a7.649 7.649 0 0 0-.05-.219c-.186-.758-.51-1.415-1.073-1.928-.564-.512-1.288-.806-2.122-.975C13.905.055 12.918 0 11.77 0H6.224Z"
        />
    </svg>
)
const Memo = memo(DashboardIco)
export default Memo
