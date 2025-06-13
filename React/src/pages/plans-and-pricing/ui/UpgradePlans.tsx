

import { PlanCard } from './PlanCard';
import { Button } from '@/shared/ui/Button';
import ArrowRightIcon from "./ArrowRightIcon"
export function UpgradePlans({ currentFeature, newFeature, price, newPrice }) {



    return (
        <div className="pt-5 pr-6 pb-7 pl-[23px]">
            <div className="flex flex-col sm:flex-row items-centerjustify-center md:justify-between gap-[35px] sm:gap-[20px] relative">
                <PlanCard title="Current Plan" price={price} monthlyPrice={newPrice} features={currentFeature} />
                <div className="absolute flex  left-1/2 top-1/2 -translate-y-[9px] -translate-x-[15px]">
                    <ArrowRightIcon className="opacity-40" />
                    <ArrowRightIcon className="" />
                    <ArrowRightIcon className="opacity-40" />
                </div>
                <PlanCard title="New Plan" price={price} monthlyPrice={newPrice} features={newFeature} />
            </div>
            <Button className=" rounded-full bg-primary-button text-base Gilroy-medium w-[150px] h-[45px] mx-auto block mt-3" label="Confirm" />
            <p className="text-sm leading-4 Gilroy-normal text-white text-center max-w-[450px] mx-auto mt-[18px]">
                Did you know that you get two months free and a 50% discount when you select a new plan?
            </p>
            <Button className="rounded-full text-[15px] text-white text-center capitalize Gilroy-medium w-full max-w-[248px] h-[45px] mx-auto mt-5" label="Switch to Yearly Now: 0% off" />
        </div>
    );
}   
