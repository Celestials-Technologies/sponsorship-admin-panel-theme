import { useFetchPlans } from "@/pages/plans-and-pricing/api/usefetchPlans";
import DiscountIcon from "./DiscountIcon";
import PlansContainer from "./PlansContainer";
import { Loader } from "@/shared/ui/Loader";
import { Error } from "@/shared/ui/Error";
import SingalPlan from "./SingalPlan";

export function PlansAndPricing() {
    const { plans, isFetching, error } = useFetchPlans();

    const planTypes = {
        free: { fee: "$0.00", btnText: "hide" },
        startup: { fee: "$497", btnText: "Confirm The Upgrade" },
        pro: { fee: "$497", discounted: "$416", btnText: "Confirm The Upgrade" },
        enterprise: { fee: "Everything included in the Pro Plan, Plus:", btnText: "Book A Call" },
    };

    return (
        <div className="pt-10 pr-[23px] pb-[75px] pl-5 max-w-[1300px] mx-auto">
            <div className="flex items-center">
                <span className="w-[29px] h-[29px] relative rounded-full bg-primary flex justify-center items-center p-1.5 after:content-[''] after:absolute after:right-0 after:top-0 after:bg-gray-200 after:w-2px after:h-20">
                    <DiscountIcon />
                </span>
                <div className="w-px h-[33px] divider-bg-gradient ml-2 mr-3"></div>
                <p className="text-xl lg:text-2xl leading-10 Gilroy-bold text-white ">
                    Discount code applied!: Get <span className="text-primary">50% off</span> the 1st year on all plans
                </p>
            </div>

            {isFetching && <Loader />}
            {error && <Error message="Refresh Your Page or Try Again Later" />}

            {!isFetching && (
                <div className="flex flex-col lg:flex-row justify-between gap-5 pt-8">
                    {plans.map((planDataObj, indx) => {
                        const [planKey] = Object.keys(planDataObj);
                        const planData = planDataObj[planKey];
                        const config = planTypes[planKey];

                        return (
                            <PlansContainer key={indx} type={planKey} btnText={config.btnText}>
                                {planKey !== "enterprise" ? (
                                    <>
                                        <p className="text-[25px] leading-7 Gilroy-bold text-white mb-6">
                                            {planKey === "pro" ? (
                                                <>
                                                    <span className="line-through text-[#C0BDBD]">{config.fee}</span>{" "}
                                                    <span className="text-primary">{config.discounted}</span>
                                                    <sub className="text-sm">/Month</sub>
                                                </>
                                            ) : (
                                                <>
                                                    {config.fee}
                                                    {planKey !== "free" && <sub className="text-sm">/Month</sub>}
                                                </>
                                            )}
                                        </p>

                                        {planData.allow.map((item, i) => (
                                            <SingalPlan key={i} type="tick" text={item} />
                                        ))}

                                        <hr className="mt-2 border-[#e5e5e585]" />
                                        <div className="pl-1.5 pt-2">
                                            <p className="text-[13px] leading-[19px] Gilroy-medium text-[#FF0F0F] mt-[7px] mb-1.5">
                                                What You’re Missing
                                            </p>
                                            {planData.missing.map((item, i) => (
                                                <SingalPlan key={i} type="cross" text={item} />
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-xs leading-7 Gilroy-bold text-primary-button mb-6">
                                            {config.fee}
                                        </p>
                                        {planData.allow.map((item, i) => (
                                            <SingalPlan key={i} type="tick" text={item} />
                                        ))}
                                    </>
                                )}
                            </PlansContainer>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
