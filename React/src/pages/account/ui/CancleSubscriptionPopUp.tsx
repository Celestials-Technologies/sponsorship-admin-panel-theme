import { useState } from 'react'
import CrossIcon from '@/shared/ui/CrossIcon'
import profilePic from "@/shared/images/user_profile1.png"
import { Button } from '@/shared/ui/Button'
import CancleSubscriptionPopUp2 from './CancleSubscriptionPopUp2'
import { Link } from 'react-router-dom'

export default function CancleSubscriptionPopUp({ onClose }) {
    const [acceptOffer, setAcceptOffer] = useState(false)

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/10">
                <div className="bg-white py-5 px-5 rounded-xl w-full max-w-2xl relative">
                    <div className="relative">
                        <p className='Gilroy-extrabold text-[27.22px] text-primary'>Get Sponsered.ai</p>
                        <Link to="/cancle-offer"> <CrossIcon color="gray" size="3rem" className='absolute right-0 -top-5 cursor-pointer' /></Link>
                    </div>
                    <div className="mt-3 flex justify-center gap-4">
                        <div className="flex flex-col justify-center items-center gap-1">
                            <div>
                                <img src={profilePic} width="108px" height="108px" className='rounded-full object-cover ' alt="Profile-pic" />
                            </div>
                            <p className='text-primary font-semibold '>Tim</p>
                            <p className='text-[14px] text-center leading-tight'>Founder & Ceo  @GetSponsored.AI</p>
                        </div>
                        <div className="flex flex-col gap-5 justify-between items-center max-w-[431px]">
                            <p className='px-8 py-6 pb-10 bg-[#F1EAEC] rounded-lg text-[15px] leading-[18px]'>
                                Hello Tim Here at Get Sponsored.ai we care about users, so to convince you to stay with us,
                                <span className='block py-2'>
                                    I would like to offer you <span className='text-primary font-semibold'>50% OFF any package!</span>
                                </span>
                            </p>
                            <Button variant="outline" onClick={() => setAcceptOffer(true)} className="w-full rounded-full text-base bg-primary-button text-white py-5 " label='Claim 50% Discount' />
                        </div>
                    </div>
                </div>
            </div>
            {acceptOffer && <CancleSubscriptionPopUp2 onClose={setAcceptOffer} onAccept={onClose} />}
        </>
    )
}
