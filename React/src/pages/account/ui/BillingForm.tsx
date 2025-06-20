import { useState } from "react"
import { Input } from "@/shared/ui/Input"
import { Button } from "@/shared/ui/Button"
import type { billingDataType } from "@/shared/types/billingDetail"


type billinfFormPropsType = {
    billingData: billingDataType;
    setBillingData: React.Dispatch<React.SetStateAction<billingDataType>>;
    handleBillingChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};


export default function BillingForm({ billingData, setBillingData, handleBillingChange }: billinfFormPropsType) {
    const [error, setError] = useState<string>('')

    const handleSubmitBillingForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            !billingData.address ||
            !billingData.city ||
            !billingData.state ||
            !billingData.zipCode ||
            !billingData.country
        ) {
            setError("Please fill in all required fields.");
        } else {
            setError("");
        }
    };
    return (
        <div className="mt-6">
            <h3 className="text-[21.47px] Gilroy-bold mb-1">Billing Information</h3>
            <p className="text-[14px] mb-4">You can change your billing information in the field below</p>

            <form onSubmit={handleSubmitBillingForm} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="text-left w-full sm:w-1/2">
                        <Input
                            type="text"
                            label={<p>Full Address<span className="text-primary">*</span></p>}
                            placeholder="Full Address*"
                            name="address"
                            value={billingData.address}
                            onChange={handleBillingChange}
                        />
                    </div>
                    <div className="text-left w-full sm:w-1/2">
                        <Input
                            type="text"
                            label={<p>City Name<span className="text-primary">*</span></p>}
                            placeholder="City Name*"
                            name="city"
                            value={billingData.city}
                            onChange={handleBillingChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="text-left w-full sm:w-1/2 lg:min-w-[278px]">
                        <Input
                            type="text"
                            label={<p>State/Province<span className="text-primary">*</span></p>}
                            placeholder="State/Province..."
                            name="state"
                            value={billingData.state}
                            onChange={handleBillingChange}
                        />
                    </div>
                    <div className="text-left w-full sm:w-1/2">
                        <Input
                            type="number"
                            label={<p>Zip Code<span className="text-primary">*</span></p>}
                            placeholder="Zip Code..."
                            name="zipCode"
                            value={billingData.zipCode}
                            onChange={handleBillingChange}
                        />
                    </div>
                </div>

                <div className="text-left">
                    <Input
                        type="text"
                        label="Country"
                        placeholder="Select Country..."
                        name="country"
                        value={billingData.country}
                        onChange={handleBillingChange}
                    />
                </div>
                {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
                <Button
                    type="submit"
                    className="text-[18px] w-full sm:w-[223px] py-6 rounded-full mx-auto"
                    label="Save changes"
                />

            </form>
        </div >
    )
}
