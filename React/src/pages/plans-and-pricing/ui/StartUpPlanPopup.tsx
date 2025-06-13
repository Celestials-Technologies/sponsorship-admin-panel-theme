
import { Button } from '@/shared/ui/Button'
import CustomDiv from '@/shared/ui/CustomDiv'
import CrossIcon from "@/shared/ui/CrossIcon"
import { Link } from 'react-router-dom'

export function StartUpPlanPopup() {
    return (

        <CustomDiv style="max-w-[581px] mx-auto text-center !rounded-[16px] mx-auto mt-50 ">
            <div className="text-right">
                <Link to="/plans-and-pricing" className='flex justify-end'><CrossIcon color="white" size="2rem" /></Link>
            </div>
            <h2 className="text-[44px] leading-[44px] Gilroy-bold text-primary text-center capitalize mt-2 mb-11">Confirm Startup Plan</h2>
            <Button className='bg-primary-button rounded-full min-w-[178px] py-[22px] text-[15px]' type="button" variant="default" label="Confirm" />
        </CustomDiv>

    )
}
