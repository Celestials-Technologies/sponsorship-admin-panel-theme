import { useState } from "react"
import { Input } from "@/shared/ui/Input"
import { Button } from "@/shared/ui/Button"
import { handleSubmitBillingForm } from "../model/constant"

export default function BillingForm({ data, onChange }) {
    const [error, setError] = useState('')

    return (
        <div className="mt-6">
            <h3 className="text-[21.47px] Gilroy-bold mb-1">Billing Information</h3>
            <p className="text-[14px] mb-4">You can change your billing information in the field below</p>

            <form onSubmit={e => handleSubmitBillingForm(e, setError)} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="text-left w-full sm:w-1/2">
                        <Input
                            type="text"
                            label={<p>Full Address<span className="text-primary">*</span></p>}
                            placeholder="Full Address*"
                            value={data.address}
                            onChange={(e) => onChange('address', e.target.value)}
                        />
                    </div>
                    <div className="text-left w-full sm:w-1/2">
                        <Input
                            type="text"
                            label={<p>City Name<span className="text-primary">*</span></p>}
                            placeholder="City Name*"
                            value={data.city}
                            onChange={(e) => onChange('city', e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="text-left w-full sm:w-1/2 lg:min-w-[278px]">
                        <Input
                            type="text"
                            label={<p>State/Province<span className="text-primary">*</span></p>}
                            placeholder="State/Province..."
                            value={data.state}
                            onChange={(e) => onChange('state', e.target.value)}
                        />
                    </div>
                    <div className="text-left w-full sm:w-1/2">
                        <Input
                            type="number"
                            label={<p>Zip Code<span className="text-primary">*</span></p>}
                            placeholder="Zip Code..."
                            value={data.zip}
                            onChange={(e) => onChange('zip', e.target.value)}
                        />
                    </div>
                </div>

                <div className="text-left">
                    <Input
                        type="text"
                        label="Country"
                        placeholder="Select Country..."
                        value={data.country}
                        onChange={(e) => onChange('country', e.target.value)}
                    />
                </div>
                {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
                <Button
                    type="submit"
                    className="text-[18px] w-full sm:w-[223px] py-6 rounded-full mx-auto"
                    label="Save changes"
                />

            </form>
        </div>
    )
}
