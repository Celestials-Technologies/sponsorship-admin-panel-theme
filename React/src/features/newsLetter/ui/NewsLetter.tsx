import { Form, Link } from 'react-router-dom'
import { Button } from "@/shared/ui/Button"
import { Input } from '@/shared/ui/Input'

export function NewsLetter() {
    return (
        <div className="w-full max-w-[714px] mx-auto mt-[147px]">
            <p className="text-[21px] lg:text-[25px] leading-[25px] text-primary text-center Gilroy-semibold mb-[22px]">Get Smarter About eCommerce in 5 min.</p>
            <p className=" txett-[18px] lg:text-[21px] leading-[30px] text-white text-center Gilroy-normal mb-[22px]">LTV SPOT is the daily newsletter that unpacks the tactics, insights and secrets behind the fastest growing eCommerce brands,technologies & trends for free</p>
            <div className="w-full max-w-[635px] mx-auto">
                <Form action='' className="flex border border-primary rounded-[9px] h-[65px] overflow-hidden">
                    <Input type="email" placeholder="Enter Your Email" className="h-full rounded-r-none" />
                    <Button label="Subscribe" className="w-[198px] h-full text-xl text-secondary rounded-l-none" size="lg"></Button>
                </Form>
                <div className="flex flex-col sm:flex-row items-center gap-2.5 mt-5 border-b border-[#302965] pb-[22px]">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="114" height="21" viewBox="0 0 114 21" fill="none">
                            <path d="M10.623 0.293945L12.919 7.36029H20.349L14.338 11.7275L16.634 18.7939L10.623 14.4266L4.612 18.7939L6.90799 11.7275L0.897005 7.36029H8.32699L10.623 0.293945Z" fill="#FFA51F" />
                            <path d="M33.8027 0.293945L36.0987 7.36029H43.5287L37.5177 11.7275L39.8137 18.7939L33.8027 14.4266L27.7917 18.7939L30.0877 11.7275L24.0767 7.36029H31.5067L33.8027 0.293945Z" fill="#FFA51F" />
                            <path d="M56.9824 0.293945L59.2784 7.36029H66.7083L60.6974 11.7275L62.9934 18.7939L56.9824 14.4266L50.9714 18.7939L53.2674 11.7275L47.2564 7.36029H54.6864L56.9824 0.293945Z" fill="#FFA51F" />
                            <path d="M80.1621 0.293945L82.458 7.36029H89.888L83.877 11.7275L86.173 18.7939L80.1621 14.4266L74.1511 18.7939L76.4471 11.7275L70.4361 7.36029H77.8661L80.1621 0.293945Z" fill="#FFA51F" />
                            <path d="M103.344 0.293945L105.64 7.36029H113.07L107.059 11.7275L109.355 18.7939L103.344 14.4266L97.3327 18.7939L99.6287 11.7275L93.6177 7.36029H101.048L103.344 0.293945Z" fill="#FFA51F" />
                        </svg>
                    </div>
                    <p className="text-[13px] leading-7 text-center sm:leading-4 Gilroy-normal text-white">Join 112.000+ eCommerce Brand Owners, Operators & Agencies for <span className="text-black pt-1.5 pb-1.5 px-0.5 bg-primary">one daily email</span></p>
                </div>
                <ul className="flex  flex-col sm:flex-row  justify-center items-center gap-8 mt-[22px]">
                    <li className="text-[13px] leading-4 text-white Gilroy-semibold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-[13px] leading-4 text-white Gilroy-semibold">
                        <Link to="/">About US</Link>
                    </li>
                    <li className="text-[13px] leading-4 text-white Gilroy-semibold">
                        <Link to="/">Newsletter Archives</Link>
                    </li>
                    <li className="text-[13px] leading-4 text-white Gilroy-semibold">
                        <Link to="/">Partners</Link>
                    </li>
                    <li className="text-[13px] leading-4 text-white Gilroy-semibold">
                        <Link to="/"> Advertise</Link>
                    </li>
                    <li className="text-[13px] leading-4 text-white Gilroy-semibold">
                        <Link to="/">With Us</Link>
                    </li>
                </ul>
            </div>
        </div>)
}
