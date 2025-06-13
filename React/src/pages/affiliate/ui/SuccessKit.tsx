import { Button } from '@/shared/ui/Button'
import CustomDiv from '@/shared/ui/CustomDiv'
import React from 'react'

export default function SuccessKit() {
    return (
        <CustomDiv style="flex flex-col sm:flex-row justify-center items-center sm:h-[373px] max-w-[534px] mx-auto rounded-2xl !p-0 mt-9 overflow-hidden">
            <div className="sm:w-[260px] max-h-[650px] scale-[1.045]">
                <img className="rounded-s-2xl w-full h-full" src="/images/success-kit.png" alt="Devices" />
            </div>
            <div className="py-6 pr-3.5 pl-5 w-full sm:max-w-[273px]">
                <h4 className="text-[34px] leading-9 text-white Gilroy-bold mb-2">Success kit</h4>
                <p className="text-base md:text-lg leading-7 text-white Gilroy-medium capitalize mb-4 opacity-70">We wanted to make it as easy as possible to generate passive revenue with your Flodesk
                    referrals.
                    This simple kit equips you with everything you need to get rocking, rolling, and generating revenue.</p>
                <Button className="bg-primary-button px-[19.5px] h-[45px] rounded-full text-base md:text-lg text-white " label=" Access the Success Kit" />
            </div>
        </CustomDiv>
    )
}
