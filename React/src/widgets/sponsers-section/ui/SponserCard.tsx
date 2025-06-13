import { bgColor } from "../model/constant"

export function SponserCard({ sponser }) {

    return (
        <div className="bg-white w-full max-w-[354px] h-[390px] rounded-[21px]">
            <div className={`border border-primary ${bgColor[sponser?.backgroundColor] ??
                "bg-gray-300"} h-[219px] rounded-[21px] flex justify-center items-center`}>
                <img src={`${import.meta.env.VITE_FRONTEND_URL}${sponser.imageSrc}`} alt={sponser.name} />
            </div>
            <div className="py-4 px-5 text-black capitalize">
                <h4 className="text-[21px] leading-[26px] Gilroy-black  mb-2">{sponser.name}</h4>
                <p className="text-sm md:text-base leading-[25px] text-gray-600 Gilroy-normal pr-2 mb-1.5">{sponser.description}</p>
            </div>
        </div>)
}
