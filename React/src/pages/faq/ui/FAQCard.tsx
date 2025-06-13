import { Button } from "@/shared/ui/Button";
import ArrowRightIcon from "./ArrowRightIcon";

export default function FAQCard({ question, answer }) {

    return (
        <div className="bg-[#372e7b] flex justify-between items-starts  pt-[21px] px-2 sm:px-7 pb-[17px]  rounded-[15px] mb-[15px] bg-translucentWhite min-h-[141px]">
            <div className="w-full max-w-[968px]">
                <p className="text-[17px] sm:text-[22px] text-white Gilroy-medium capitalize mb-3">
                    {question}
                </p>
                <p className="text-[15px] leading-[23px] text-white Gilroy-normal capitalize pt-px">
                    {answer}
                </p>
            </div>
            <Button className="!w-[24px] h-[24px] !p-0  flex justify-center items-center rounded-full"
                icon={<ArrowRightIcon />}
            />
        </div>
    );
}
