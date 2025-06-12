import React from "react"
import BillingCard from "./BillingCard"
import InvoicePreview from "./InvoicePreview"

export default function BillingSection() {
    return (
        <div className="flex flex-col lg:flex-row gap-4 px-4 py-8 text-white max-w-[1300px] mx-auto">
            <BillingCard />
            <InvoicePreview />
        </div>
    )
}
