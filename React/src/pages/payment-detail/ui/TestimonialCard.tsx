import FiveStarIcon from "./FiveStarIcon";
import { PaymentDetailForm } from "./PaymentDetailForm";

export function TestimonialCard({ text, name, role, imgSrc, index }) {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="min-w-[263px] max-w-[263px] h-[333px] border border-primary bg-[#241d5c] rounded-[13px] p-5 relative  md:-top-20">
                    <FiveStarIcon />
                    <p className="text-[13px] leading-5 Gilroy-normal text-white min-h-[187px] mt-5">{text}</p>
                    <div className="flex items-center gap-2.5 mt-5">
                        <div className="w-[42px] h-[42px] rounded-full overflow-hidden">
                            <img src={`http://localhost:5173/${imgSrc}`} alt={`${name} profile`} />
                        </div>
                        <div>
                            <p className="text-[15px] leading-5 Gilroy-semibold text-primary capitalize">{name}</p>
                            <p className="text-[10px] leading-4 Gilroy-normal text-white lowercase">{role}</p>
                        </div>
                    </div>
                </div>

                {index === 1 && <PaymentDetailForm />}
            </div>


        </>
    )
}
