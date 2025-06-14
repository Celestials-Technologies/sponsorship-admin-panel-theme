import * as React from "react"
import { SVGProps, memo } from "react"
const EntrepreneursIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.4em"
        height="1.4em"
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M5.654 0h-1.71C1.973 0 .938 1.035.938 2.997v1.71c0 1.962 1.035 2.997 2.997 2.997h1.71c1.962 0 2.997-1.035 2.997-2.997v-1.71C8.65 1.035 7.616 0 5.654 0Z"
        />
        <path
            fill="#fff"
            d="M15.941 0h-1.71c-1.962 0-2.997 1.035-2.997 2.997v1.71c0 1.962 1.035 2.997 2.997 2.997h1.71c1.962 0 2.997-1.035 2.997-2.997v-1.71C18.938 1.035 17.903 0 15.941 0Z"
            opacity={0.4}
        />
        <path
            fill="#fff"
            d="M15.941 10.287h-1.71c-1.962 0-2.997 1.035-2.997 2.997v1.71c0 1.962 1.035 2.997 2.997 2.997h1.71c1.962 0 2.997-1.035 2.997-2.997v-1.71c0-1.962-1.035-2.997-2.997-2.997Z"
        />
        <path
            fill="#fff"
            d="M5.654 10.287h-1.71c-1.971 0-3.006 1.035-3.006 2.997v1.71C.938 16.964 1.972 18 3.934 18h1.71c1.962 0 2.997-1.035 2.997-2.997v-1.71c.009-1.97-1.026-3.006-2.988-3.006Z"
            opacity={0.4}
        />
    </svg>
)
const Memo = memo(EntrepreneursIcon)
export default Memo
