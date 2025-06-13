import { SVGProps, memo } from "react"
const BillingIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        {...props}
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth={1.405}
            d="M15.6 20.345a.042.042 0 0 1 .052 0l1.592 1.55s.057 0 .057-.032V1H1v20.825a.037.037 0 0 0 .019.037.037.037 0 0 0 .041-.004l2.052-1.541a.038.038 0 0 1 .047 0l2.121 1.56a.037.037 0 0 0 .052 0l1.874-1.56h.051l2.117 1.555a.037.037 0 0 0 .052 0l1.967-1.527a.042.042 0 0 1 .056 0l2.113 1.55a.042.042 0 0 0 .056 0l1.874-1.545M2.93 11.028h6.23M2.93 8.527h7.48M2.93 3.482h8.117M2.93 5.876h6.759M13.37 10.953h2M2.93 13.698h7.48M13.769 13.628h1.602M13.37 16.392h2M13.37 8.452h2M13.769 5.876h1.602M13.37 3.482h2"
        />
    </svg>
)
const Memo = memo(BillingIcon)
export default Memo
