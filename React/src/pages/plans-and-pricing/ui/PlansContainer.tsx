import { Button } from '@/shared/ui/Button'

export default function PlansContainer({ type = "", btnText = "Confirm", setShowUpgradeModal, children }) {

    return (

        <div className="relative w-full max-w-[300px] shadow-lg">
            {type === "Pro Plan" && (
                <div className='absolute -top-3 right-7 text-white bg-primary-button rounded-sm text-[12px] font-bold py-1 px-3 z-20'>
                    Most Popular
                </div>
            )}

            <div className="bg-[#302964] rounded-[10px] pt-5 pl-[15px] px-[10px] pb-2 h-[758px] overflow-auto relative z-10">
                <p className="text-sm md:text-base leading-4 Gilroy-bold text-primary mb-2 capitalize">{type}</p>

                {children}

                {btnText !== "hide" && (
                    <Button
                        className='bg-primary-button rounded-full text-white text-base py-[24px]'
                        label={btnText}
                        onClick={() => setShowUpgradeModal(type)}
                    />

                )}

                {(type === "Startup Plan" || type === "Pro Plan") && (
                    <p className='text-sm mt-2 text-gray-50'>(You will not be charged yet)</p>
                )}
            </div>
        </div>

    )
}
