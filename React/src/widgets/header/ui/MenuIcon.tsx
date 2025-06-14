import * as React from "react"
import { SVGProps, memo } from "react"
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="2.1em"
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M2.468 0C1.105 0 0 1.237 0 2.763 0 4.29 1.105 5.526 2.468 5.526V0Zm46.064 5.526C49.895 5.526 51 4.29 51 2.763 51 1.237 49.895 0 48.532 0v5.526Zm-46.064 9.21C1.105 14.737 0 15.975 0 17.5c0 1.526 1.105 2.763 2.468 2.763v-5.526Zm39.484 5.527c1.363 0 2.467-1.237 2.467-2.763 0-1.526-1.104-2.763-2.467-2.763v5.526Zm-39.484 9.21C1.105 29.474 0 30.712 0 32.238 0 33.763 1.105 35 2.468 35v-5.526ZM25.5 35c1.363 0 2.468-1.237 2.468-2.763 0-1.526-1.105-2.763-2.468-2.763V35ZM2.468 5.526h46.064V0H2.468v5.526Zm0 14.737h39.484v-5.526H2.468v5.526Zm0 14.737H25.5v-5.526H2.468V35Z"
        />
    </svg>
)
const Memo = memo(MenuIcon)
export default Memo
