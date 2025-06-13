import ConnectSponsersLogo from '@/shared/ui/ConnectSponsersLogo'
import CustomDiv from '@/shared/ui/CustomDiv'
import { Input } from '@/shared/ui/Input'
import { useState } from 'react'
import OnlinePaymentIcon from "./OnlinePaymentIcon";
import LockIcon from "./LockIcon";
import { Button } from "@/shared/ui/Button";
import FourStarIcon from "./FourStarIcon";
import { handleSubmit } from '../utils/checkout';
import { handleChange } from '../utils/checkout';

export function PaymentDetailForm() {
    const [formData, setFormData] = useState({
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        cardNumber: "",
        nameOnCard: "",
        securityCode: "",
    });

    return (
        <form onSubmit={e => handleSubmit(e, formData, setFormData)} className="text-center w-full max-w-[512px] md:w-[512px] mx-auto mb-4">
            <ConnectSponsersLogo className="text=[36px] md:text-[38px] lg:text-[43px]" />
            <CustomDiv style="w-full mt-8 !px-2 sm:px-5 !rounded-2xl relative ">
                <div className="space-y-3">
                    <h3 className="text-white Gilroy-bold text-[28px] leading-[30px] mb-[18px]">
                        Payment Details
                    </h3>
                    <p className="text-[18.7px] lg:max-w-sm mx-auto text-white leading-[30px] Gilroy-normal mb-[18px] capitalize">
                        This is to Verify your account, <span className="Gilroy-bold">you will not be charged during 7 days free trial.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="text-left w-full sm:w-1/2">
                            <Input
                                type="text"
                                label="Full Address*"
                                placeholder="Full Address*"
                                value={formData.address}
                                onChange={(e) => handleChange(setFormData, "address", e.target.value)}
                            />

                        </div>
                        <div className="text-left w-full sm:w-1/2">
                            <Input
                                type="text"
                                label="City Name*"
                                placeholder="City Name*"
                                value={formData.city}
                                onChange={(e) => handleChange(setFormData, "city", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="text-left w-full sm:w-1/2 lg:min-w-[278px]">
                            <Input
                                type="text"
                                label="State/Province*"
                                placeholder="State/Province..."
                                value={formData.state}
                                onChange={(e) => handleChange(setFormData, "state", e.target.value)}
                            />
                        </div>
                        <div className="text-left w-full sm:w-1/2">
                            <Input
                                type="number"
                                label="Zip Code*"
                                placeholder="Zip Code..."
                                value={formData.zip}
                                onChange={(e) => handleChange(setFormData, "zip", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="text-left">
                        <Input
                            type="text"
                            label="Country"
                            placeholder="Select Country..."
                            value={formData.country}
                            onChange={(e) => handleChange(setFormData, "country", e.target.value)}
                        />
                    </div>

                    <div className="text-left">
                        <Input
                            type="number"
                            label="Card Number"
                            placeholder="0123xxxxxxxxxx"
                            value={formData.cardNumber}
                            onChange={(e) => handleChange(setFormData, "cardNumber", e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="text-left w-full sm:w-1/2 lg:min-w-[278px]">
                            <Input
                                type="text"
                                label="Name On The Card*"
                                placeholder="ABC..."
                                value={formData.nameOnCard}
                                onChange={(e) => handleChange(setFormData, "nameOnCard", e.target.value)}
                            />
                        </div>
                        <div className="text-left w-full sm:w-1/2">
                            <Input
                                type="number"
                                label="Security Code*"
                                placeholder="123"
                                value={formData.securityCode}
                                onChange={(e) => handleChange(setFormData, "securityCode", e.target.value)}
                            />
                        </div>
                    </div>

                    <OnlinePaymentIcon className="w-full max-w-[325px] mb-9 sm:mb-1" />

                    <div className="absolute bottom-0 left-0 flex justify-between items-center bg-primary w-full p-2 rounded-b-2xl">
                        <p className="flex items-center gap-3 text-white">
                            <LockIcon />
                            <span className="text-sm Gilroy-medium">Encrypted, safe & secure.</span>
                        </p>
                        <p className="py-[2px] px-[3px] text-[8px] border text-white bg-transparent rounded-sm">
                            powered By <span className="Gilroy-bold">Stripe</span>
                        </p>
                    </div>
                </div>
            </CustomDiv>

            <Button
                className="rounded-full bg-primary-button text-[19px] py-7 my-4 w-full max-w-[292px]"
                label="Complete Registration"
                type="submit"
            />

            <Button
                variant="ghost"
                className="rounded-full text-primary text-[19px] py-7 mb-2 w-[292px]"
                label="Logout"
            />

            <div className="w-[257px] mx-auto bg-primary p-3 h-[75px] flex justify-center items-end gap-8 border-[3px] border-[#e5e5e5] rounded-[18px] mt-5">
                <div>
                    <FourStarIcon />
                    <p className="pl-6 text-[14px] leading-4 Gilroy-bold text-[#2A1B69]">497 comment</p>
                </div>
                <p className="text-[20px] leading-4 Gilroy-bold text-[#3B2A82] pb-1">4.5</p>
            </div>
        </form>)
}
