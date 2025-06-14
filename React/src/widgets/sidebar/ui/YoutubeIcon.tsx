import * as React from "react"
import { SVGProps, memo } from "react"
const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        viewBox="0 0    256 256"
        {...props}
    >
        <path
            fill="#f7f7f7"
            strokeMiterlimit={10}
            d="M24.402 9c-6.601 0-12.8.5-16.101 1.2-2.2.5-4.102 2-4.5 4.3C3.402 16.898 3 20.5 3 25s.398 8 .898 10.5c.403 2.2 2.301 3.8 4.5 4.3 3.504.7 9.5 1.2 16.102 1.2s12.598-.5 16.098-1.2c2.203-.5 4.101-2 4.5-4.3.402-2.5.902-6.098 1-10.598 0-4.5-.5-8.101-1-10.601-.399-2.2-2.297-3.801-4.5-4.301-3.5-.5-9.598-1-16.196-1zm0 2c7.2 0 12.996.598 15.797 1.098 1.5.402 2.7 1.402 2.899 2.703.601 3.199 1 6.601 1 10.101C44 29.2 43.5 32.7 43.098 35.2c-.297 1.899-2.297 2.5-2.899 2.703-3.601.7-9.601 1.196-15.601 1.196S12.5 38.699 9 37.902C7.5 37.5 6.3 36.5 6.102 35.2 5.3 32.4 5 28.7 5 25c0-4.602.402-8 .8-10.098C6.103 13 8.2 12.398 8.7 12.2 12 11.5 18.101 11 24.401 11zM19 17v16l14-8zm2 3.402L29 25l-8 4.598z"
            fontFamily="none"
            fontSize="none"
            fontWeight="none"
            style={{
                mixBlendMode: "normal",
            }}
            textAnchor="none"
            transform="scale(5.12)"
        />
    </svg>
)
const Memo = memo(YoutubeIcon)
export default Memo
