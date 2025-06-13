import LossIcon from "./LossIcon"
export function LossItem({ title, description }) {
    return (
        <div className="flex gap-1.5 mt-4">
            <LossIcon />
            <div className="w-11/12">
                <p className="text-[18px] sm:text-[21px] leading-8 Gilroy-medium text-gray-200">{title}</p>
                <p className="text-base md:text-lg mt-1.5 leading-[25px] Gilroy-normal text-gray-300">{description}</p>
            </div>
        </div>
    )
}
