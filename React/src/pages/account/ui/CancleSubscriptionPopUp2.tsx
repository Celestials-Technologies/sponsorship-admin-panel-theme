import { Button } from '@/shared/ui/Button'
import CrossIcon from '@/shared/ui/CrossIcon'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { handleAcceptOffer } from '../utils/acceptOffer'

export default function CancleSubscriptionPopUp2({ onClose, onAccept }) {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/10">
            <div className="bg-white py-5 px-5 rounded-xl w-full max-w-2xl relative">
                <div className="relative">
                    <p className='Gilroy-extrabold text-[27.22px] text-primary'>Offer accepted!</p>
                    <Button variant={"ghost"} className='absolute -right-3 -top-3 hover:bg-transparent ' onClick={() => handleAcceptOffer(onClose, onAccept)} icon={<CrossIcon color="gray" size="3rem" />} />
                </div>
                <div className="mt-3 text-left">
                    <p className='font-bold text-[27px]'>Your discount code is applied!</p>
                    <p className='text-[18px] my-4'>
                        Thank you for accepting our offer. You got a fantastic discount, it'll apply to all the next packages you may upgrade!
                    </p>
                    <Button variant="outline" onClick={() => handleAcceptOffer(onClose, onAccept)} className="w-full rounded-full text-base bg-primary-button text-white py-6 " label='Got it! Return to App'></Button>

                </div>
            </div>
        </div>
    )
}
