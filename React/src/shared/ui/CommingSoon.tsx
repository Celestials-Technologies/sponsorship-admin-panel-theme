import { Button } from '@/shared/ui/Button';
import CustomDiv from './CustomDiv';

export default function ComingSoon({ Icon, title, description, shape = "sequare", extraDes = undefined }) {
    return (
        <CustomDiv style="mt-10 !px-2 sm:px-8 !pr-2 !rounded-2xl w-full max-w-[738px] min-h-[271px] flex flex-col sm:flex-row gap-4 sm:gap-6 items-start px-4 py-5">
            <div className="w-[70px] h-[70px] min-w-[70px] rounded-full bg-[#655ea5] flex justify-center items-center">
                <div
                    className={`py-0.5 ${shape === "rounded" ? "rounded-full w-9 h-[38px]" : "rounded-sm w-11 h-[27px]"} bg-primary flex justify-center items-center`}
                >
                    {Icon && <Icon />}
                </div>
            </div>

            <div className="flex flex-col text-white w-full">
                <h2 className="text-[22px] sm:text-[26px] md:text-[28px] leading-[29px] Gilroy-extrabold mb-3 sm:mb-5 break-words">
                    {title}
                </h2>
                <p className="text-[15px] leading-6 capitalize mb-4 max-w-full sm:max-w-[520px]">
                    {description}
                </p>
                {extraDes && <p className='text-[18px] Gilroy-semibold capitalize mb-3'>{extraDes}</p>}
                <Button
                    className="mt-auto rounded-full text-[16px] sm:text-[18px] w-[140px] sm:w-[154px] p-3 h-[44px]"
                    label="Coming Soon"
                />
            </div>
        </CustomDiv>
    );
}
