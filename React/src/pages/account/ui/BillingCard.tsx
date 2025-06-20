import { useState } from "react"
import BillingForm from "./BillingForm"
import { Input } from "@/shared/ui/Input"
import CustomDiv from "@/shared/ui/CustomDiv"
import type { billingDataType } from "@/shared/types/billingDetail"

export default function BillingCard() {
    const [billingData, setBillingData] = useState<billingDataType>({
        cardNumber: "",
        expirydate: "",
        ccvCode: "",
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    })

    const handleBillingInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBillingData((prev) => ({ ...prev, [name]: value }));

    };


    return (
        <CustomDiv style="text-center w-full lg:w-1/2 pt-10">
            <h2 className="text-[21.47px] Gilroy-bold mb-1">Card Information</h2>
            <p className="text-[14px] mb-4">You can change your Card information in the field below</p>

            <div className="flex flex-col gap-3 mb-2">
                <Input className="rounded-xl"
                    type="string"
                    name="cardnumber"
                    placeholder="5294 9728 3961 3763"
                    value={billingData.cardNumber}
                    onChange={handleBillingInputChangeHandler}
                />
                <div className="flex flex-col sm:flex-row gap-3">
                    <Input className="w-full sm:w-1/2 rounded-xl"
                        type="string"
                        name="expirydate"
                        placeholder="10/29"
                        value={billingData.expirydate}
                        onChange={handleBillingInputChangeHandler}
                    />
                    <Input className="w-full sm:w-1/2 rounded-xl"
                        type="string"
                        name="ccvCode"
                        placeholder="527"
                        value={billingData.ccvCode}
                        onChange={handleBillingInputChangeHandler}
                    />
                </div>
                <p className="text-[14px] text-gray-300">Be Charged during 7 days Free Trials</p>
            </div>

            <BillingForm
                billingData={billingData}
                setBillingData={setBillingData}
                handleBillingChange={handleBillingInputChangeHandler}
            />
        </CustomDiv>
    )
}
