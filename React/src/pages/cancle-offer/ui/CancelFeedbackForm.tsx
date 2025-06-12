
import { Button } from "@/shared/ui/Button";
import { CanclePlanReasons } from "../model/constant";
import { RadioInput } from "./RadioInput";
import { Section } from "./Section"
import { Link } from "react-router-dom";

export default function CancelFeedbackForm() {
    const likelihoodOptions = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div className=" px-2 sm:px-4 mt-[60px] pb-[69px] max-w-[1069px] mx-auto">
            <div className="bg-translucentWhite rounded-[20px] border border-[#e5e5e585]">

                {/* Reason Section */}
                <Section title="Please share your reason for leaving REQUIRED" roundedTop>
                    <form className="space-y-[18px]">
                        {CanclePlanReasons.map((reason, index) => (
                            <RadioInput
                                key={index}
                                id={`reason-${index}`}
                                name="reason"
                                label={reason}
                            />
                        ))}
                    </form>
                </Section>

                {/* Likelihood Section */}
                <Section title="How likely are you to return? REQUIRED" borderTop>
                    <div>
                        <div className="flex justify-between">
                            <p className="text-[19px] leading-[27px] Gilroy-medium text-white">No chance</p>
                            <p className="text-[19px] leading-[27px] Gilroy-medium text-white">Absolutely will!</p>
                        </div>
                        <div className="flex gap-8 mt-3 flex-wrap">
                            {likelihoodOptions.map((num) => (
                                <RadioInput
                                    key={num}
                                    id={`return-${num}`}
                                    name="return"
                                    label={num}
                                    center
                                />
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Text Area Section */}
                <Section title="Anything else you'd like to share about your experience? REQUIRED" roundedBottom>
                    <textarea
                        className="bg-white w-full sm:w-140 py-3 px-4 text-[19px] leading-[27px] Gilroy-medium text-[#00000080] rounded-[15px] min-h-[81px]"
                        placeholder="Typing"
                    />
                </Section>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-[25px]">
                <Button
                    variant="outline"
                    className="rounded-full text-primary border border-primary hover:bg-red-600 hover:text-white hover:border-white bg-transparent text-[19px] py-7  w-[229px]"
                    label=" I want to cancel"
                />
                <Link to="/account" className="w-full max-w-[241px] py-4 text-center rounded-full Gilroy-medium text-white bg-primary" >I don't want to cancel </Link>

            </div>
        </div>
    );
}
