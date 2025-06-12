import { useState } from 'react'
import { useFetchPlans } from "../api/usefetchPlans"
import DiscountIcon from "./DiscountIcon"
import PlansContainer from "./PlansContainer"
import { Loader } from "@/shared/ui/Loader"
import { Error } from "@/shared/ui/Error"
import SingalPlan from "./SingalPlan"
import { planTypes } from "../model/Plans"
import { StartUpPlanPage } from "./StartUpPlanPage"
import { ProPlanPage } from './ProPlanPage'


export function PlansAndPricing() {
    const { plans, isFetching, error } = useFetchPlans()
    const [showUpgradeModal, setShowUpgradeModal] = useState(undefined)


    return (
        <>
            <div className="pt-10 px-2 sm:pr-[23px] pb-[75px] sm:pl-5 max-w-[1300px] mx-auto">
                <div className="flex items-center">
                    <span className="w-[29px] h-[29px] relative rounded-full bg-primary flex justify-center items-center p-1.5 after:content-[''] after:absolute after:right-0 after:top-0 after:bg-gray-200 after:w-2px after:h-20">
                        <DiscountIcon />
                    </span>
                    <div className="w-px h-[33px] divider-bg-gradient ml-2 mr-3"></div>
                    <p className="text-lg sm:text-xl lg:text-2xl leading-6 md:leading-10 Gilroy-bold text-white ">Discount code applied!: Get <span className="text-primary">50% off</span> the 1st year on all plans</p>
                </div>

                {isFetching && <Loader />}
                {error && <Error message="Refresh Your Page or Try Agin Latter" />}
                {!isFetching && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4  gap-y-8 pt-8 w-full">
                        {plans.map((planDataObj, indx) => {
                            const [planKey] = Object.keys(planDataObj);
                            const planData = planDataObj[planKey];
                            const config = planTypes[planKey];

                            return (
                                <PlansContainer key={indx} type={config.label} btnText={config.btnText} setShowUpgradeModal={setShowUpgradeModal}>
                                    {planKey !== "enterprise" ? (
                                        <>
                                            <div className="text-[25px] leading-7 Gilroy-bold text-white mb-3">
                                                {planKey === "pro" ? (
                                                    <>
                                                        <sub className="line-through text-primary mr-2">{config.fee}</sub>
                                                        <span className="text-2xl">{config.discounted}</span>
                                                        <sub className="text-xs">/Month <span className="text-gray-500">(-15+% discount)</span></sub>
                                                        <p className="text-xs my-1 text-[#b1afc5] font-light">Billed annually (Save $967/year)</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        {config.fee}
                                                        {planKey !== "free" && <sub className="text-sm">/Month</sub>}
                                                    </>
                                                )}
                                            </div>

                                            {planData.allow.map((item, i) => (
                                                <SingalPlan key={i} type="tick" text={item} />
                                            ))}
                                            <hr className="mt-3 border-[#e5e5e585]" />
                                            <div className="pt-2">
                                                <p className="text-[12px] leading-[19px] Gilroy-medium text-[#FF0F0F] mt-[7px] mb-1.5">
                                                    What You’re Missing
                                                </p>
                                                {planData.missing.map((item, i) => (
                                                    <SingalPlan key={i} type="cross" text={item} />
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-xs leading-5 sm:leading-7 Gilroy-bold text-primary-button mb-4">
                                                {config.fee}
                                            </p>
                                            {planData.allow.map((item, i) => (
                                                <SingalPlan key={i} type="tick" text={item} planKey={planKey} />
                                            ))}
                                        </>
                                    )}
                                </PlansContainer>
                            );
                        })}
                    </div>
                )}
            </div >

            {showUpgradeModal === "Startup Plan" && <StartUpPlanPage onClose={setShowUpgradeModal} />}
            {showUpgradeModal === "Pro Plan" && <ProPlanPage onClose={setShowUpgradeModal} />}
        </>

    )
}