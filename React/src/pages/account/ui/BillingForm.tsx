import { useState } from "react"
import { Input } from "@/shared/ui/Input"
import { Button } from "@/shared/ui/Button"

export default function BillingForm({ data, onChange }) {
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!data.address || !data.city || !data.state || !data.zip || !data.country) {
            setError("Please fill in all required fields.")
        } else {
            setError("")
            console.log("Billing Info Submitted:", data)

        }
    }

    return (
        <div className="mt-6">
            <h3 className="text-[21.47px] Gilroy-bold mb-1">Billing Information</h3>
            <p className="text-[14px] mb-4">You can change your billing information in the field below</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="text-left w-full sm:w-1/2">
                        <Input
                            type="text"
                            label="Full Address*"
                            placeholder="Full Address*"
                            value={data.address}
                            onChange={(e) => onChange('address', e.target.value)}
                        />
                    </div>
                    <div className="text-left w-full sm:w-1/2">
                        <Input
                            type="text"
                            label="City Name*"
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
                            label="State/Province*"
                            placeholder="State/Province..."
                            value={data.state}
                            onChange={(e) => onChange('state', e.target.value)}
                        />
                    </div>
                    <div className="text-left w-full sm:w-1/2">
                        <Input
                            type="number"
                            label="Zip Code*"
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
