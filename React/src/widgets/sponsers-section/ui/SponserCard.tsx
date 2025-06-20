import { bgColor } from "../model/constant"
import type { SponserCardType } from "@/shared/types/sponsers"
export function SponserCard({ backgroundColor,imageSrc,name,description }:SponserCardType) {

    return (
        <div className="bg-white w-full max-w-[354px] h-[390px] rounded-[21px]">
            <div className={`border border-primary ${bgColor[backgroundColor] ??
                "bg-gray-300"} h-[219px] rounded-[21px] flex justify-center items-center`}>
                <img src={`${import.meta.env.VITE_FRONTEND_URL}${imageSrc}`} alt={name} />
            </div>
            <div className="py-4 px-5 text-black capitalize">
                <h4 className="text-[21px] leading-[26px] Gilroy-black  mb-2">{name}</h4>
                <p className="text-sm md:text-base leading-[25px] text-gray-600 Gilroy-normal pr-2 mb-1.5">{description}</p>
            </div>
        </div>)
}
