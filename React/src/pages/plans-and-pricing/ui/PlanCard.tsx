import CustomDiv from '@/shared/ui/CustomDiv';
import { PlanFeatureBadge } from './PlanFeatureBadge';

export function PlanCard({ title, price, monthlyPrice, features = [] }) {
    return (
        <CustomDiv style="bg-gradient border border-[#e5e5e585] rounded-[15px] !pt-3 !pb-4 !px-3 w-full max-w-[278px]">
            <p className="text-xl leading-6 Gilroy-extrabold text-white text-center capitalize mb-2">{title}</p>
            <p className="text-xl leading-6 Gilroy-extrabold text-white text-center capitalize mb-2 line-through">${price}</p>
            <p className="text-[40px] leading-[44px] Gilroy-semibold text-[#FFA51F] text-center capitalize mb-2">
                ${monthlyPrice}<span className="text-sm leading-4 Gilroy-medium text-white">/month</span>
            </p>
            <div className="flex flex-col sm:flex-row  justify-center items-center flex-wrap gap-[10px] sm:justify-between mt-3">
                {features.map((item, index) => (
                    <PlanFeatureBadge key={index} label={item} />
                ))}
            </div>
        </CustomDiv>
    );
}