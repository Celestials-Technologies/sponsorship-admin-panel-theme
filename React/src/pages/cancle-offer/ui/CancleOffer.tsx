import ConnectSponsersLogo from '@/shared/ui/ConnectSponsersLogo'
import ClaimDiscount from './ClaimDiscount'
import PausePlan from './PausePlan'
import ArrowIcon from "./ArrowIcon"
import { Button } from '@/shared/ui/Button'
import CancelFeedbackForm from './CancelFeedbackForm'


const UpdatedIcon = <div className="w-[22px] h-[22px] pl-1 rounded-full flex justify-center items-center bg-white">
    <ArrowIcon />
</div>

export function CancleOffer() {

    return (
        <>
            <div className="bg-secondary  pt-20 pb-10 px-1">
                <div className="max-w-[1300px] mx-auto">

                    <div className="">
                        <ConnectSponsersLogo className='text-lg sm:text-[43px] Gilroy-bold' />
                        <p className="text-base sm:text-xl leading-[30px] Gilroy-medium text-white text-center">Tim, we're sad to let you go! We are
                            hoping that you'd</p>
                        <p className="text-base sm:text-xl leading-[30px] Gilroy-medium text-primary text-center"> stay. Let's sweeten the deal for
                            you before you cancel</p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-center gap-13 p-1 sm:p-4 ">
                        <ClaimDiscount />
                        <PausePlan />
                    </div>

                    <div className="mt-5 p-2 text-center">
                        <p className="text-base sm:text-[19px] leading-[27px] Gilroy-medium text-white text-left sm:text-center">Important: By canceling your
                            subscription, you will lose your account, your data,</p>
                        <p className="text-base sm:text-[19px] my-1 leading-[27px] Gilroy-medium text-white text-left sm:text-center">and all features associated
                            with your plan.</p>
                        <p className="text-base sm:text-[19px] leading-[27px] Gilroy-medium text-white text-left sm:text-center">Your new accounts will not
                            have any discounts or legacy pricing.</p>
                        <Button
                            label=" Never mind! Take me back to GetSponsored.AI"
                            icon={UpdatedIcon}
                            className=" w-full h-12 mt-8 py-7 text-base sm:text-[18px] bg-primary-button max-w-[456px] flex-row-reverse justify-around rounded-full" />
                    </div>
                    <CancelFeedbackForm />
                </div>
            </div>
        </>
    )
}
