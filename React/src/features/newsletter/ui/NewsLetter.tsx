import { Form, Link } from 'react-router-dom'
import { Button } from "@/shared/ui/Button"
import { Input } from '@/shared/ui/Input'
import FiveStarIcon from './FiveStarIcon'
import { NewsLetterLinks } from '../model/constant'

export function NewsLetter() {
    return (
        <div className="w-full max-w-[714px] mx-auto mt-[147px]">
            <p className="text-[21px] lg:text-[25px] leading-[25px] text-primary text-center Gilroy-semibold mb-[22px]">
                Get Smarter About eCommerce in 5 min.</p>
            <p className="text-[18px] lg:text-[21px] leading-[30px] text-white text-center Gilroy-normal mb-[22px]">
                LTV SPOT is the daily newsletter that unpacks the tactics, insights and secrets behind the fastest growing eCommerce brands,
                technologies & trends for free</p>
            <div className="w-full max-w-[635px] mx-auto">
                <Form className="flex border border-primary rounded-[9px] h-[65px] overflow-hidden">
                    <Input type="email" placeholder="Enter Your Email" className="h-full rounded-r-none" />
                    <Button label="Subscribe" className="w-[198px] h-full text-xl text-secondary rounded-l-none" size="lg" />
                </Form>
                <div className="flex flex-col sm:flex-row items-center gap-2.5 mt-5 border-b border-[#302965] pb-[22px]">
                    <FiveStarIcon />
                    <p className="text-[13px] leading-7 text-center sm:leading-4 Gilroy-normal text-white">
                        Join 112.000+ eCommerce Brand Owners, Operators & Agencies for
                        <span className="text-black pt-1.5 pb-1.5 px-0.5 bg-primary">one daily email</span>
                    </p>
                </div>
                <ul className="flex  flex-col sm:flex-row  justify-center items-center gap-8 mt-[22px]">
                    {NewsLetterLinks?.map(singleLink => (
                        <li className="text-[13px] leading-4 text-white Gilroy-semibold">
                            <Link to={singleLink.link}>{singleLink.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>)
}
