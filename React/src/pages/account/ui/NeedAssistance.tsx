import CancleSubscriptionPopUp from './CancleSubscriptionPopUp'
import { useState } from 'react'
import { Button } from '@/shared/ui/Button'

export function NeedAssistance() {
    const [cancleSubcription, setCancleSubcription] = useState(false)
    return (
        <>
            <div className="px-8 py-6 rounded-[14px] bg-[#302964] mt-5 flex flex-col sm:flex-row gap-5 justify-between items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                <div className="max-w-2xl pr-1">
                    <h4 className="text-xl leading-6 Gilroy-bold text-[#FFFFF8] mb-4">Need Assistance?</h4>
                    <p className="text-[15px] leading-6 Gilroy-medium text-[#FFFFF8]">You can cancel your subscription at
                        any time. Please note that canceling will delete all your
                        brands, projects, and settings within AdCreative.ai.</p>
                </div>
                <Button onClick={() => setCancleSubcription(true)} className="w-full max-w-[241px] py-[24px] text-center text-[17px] rounded-full text-white bg-primary" label="Cancle Subscription" />
            </div>
            {cancleSubcription && <CancleSubscriptionPopUp onClose={setCancleSubcription} />}

        </>
    )
}
