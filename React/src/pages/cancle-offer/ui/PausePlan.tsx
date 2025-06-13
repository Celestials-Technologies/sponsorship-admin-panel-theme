import CustomDiv from '@/shared/ui/CustomDiv'
import { Button } from '@/shared/ui/Button'
import { LossItems } from '../model/constant'
import { LossItem } from './LossItem'

export default function PausePlan() {

    return (
        <CustomDiv style="pt-10 mt-10 px-[10px] sm:px-[35px] w-full max-w-[521px] h-[820px] min-h-[800] rounded-2xl overflow-auto">
            <h4 className="text-2xl sm:text-[28px] leading-[29px] Gilroy-extrabold text-white">
                Here’s What You’ll Lose:
            </h4>

            {LossItems.map((item, index) => (
                <LossItem key={index} title={item.title} description={item.description} />
            ))}

            <Button
                label="Pause the plan on the page for 3 months"
                className=" w-full h-12 mt-5 text-base bg-primary-button rounded-full"
            />
        </CustomDiv>
    )
}
