
export function PartnerDetail({ imgSrc, name, description }) {
    return (
        <div className="flex items-center gap-5 py-5 px-6 mt-3 bg-white rounded-2xl mb-3 max-w-[920px] mx-auto">
            <div className="w-[60px] h-[50px] flex justify-center items-center">
                <img className="mx-auto" src={`http://localhost:5173/${imgSrc}`} alt="Ad Creative Logo" />
            </div>
            <div className="capitalize text-black text-left">
                <h5 className="text-xl font-semibold">{name}</h5>
                <p className="text-sm md:text-base leading-[29px]">{description}</p>
            </div>
        </div>
    )
}
