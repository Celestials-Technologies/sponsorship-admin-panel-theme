import CustomDiv from "@/shared/ui/CustomDiv"
import BoxIcon from "./BoxIcon"

export default function InvoicePreview() {
    return (
        <CustomDiv style="text-center w-full lg:w-1/2 pt-10">
            <h2 className="text-[21.47px] Gilroy-bold mb-1">Upcoming Invoice in 9 months.</h2>
            <p className="text-[14px] mb-7 mt-4">This is a preview of the invoice that will be billed</p>
            <div className="bg-[#382e81] border border-gray-600  rounded-lg text-sm font-semibold mb-6">
                <div className="flex justify-between text-primary border-b border-gray-500 p-4">
                    <span>Description</span>
                    <span>Amount</span>
                </div>
                <div className="flex justify-between p-4 ">
                    <span>Starter 10 + VAT @20%</span>
                    <span className="text-primary ">$29</span>
                </div>
                <div className="flex justify-between p-4 ">
                    <span>Total Discount</span>
                    <span className="text-primary ">$0</span>
                </div>
                <div className="flex justify-between p-4 ">
                    <span>Total</span>
                    <span className="text-primary ">$29</span>
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-[21.47px] Gilroy-bold mb-1">Paid Invoice</h3>
                <p className="text-[14px]  mb-3">You can download your paid invoices here</p>
                <BoxIcon />
            </div>
        </CustomDiv>
    )
}
