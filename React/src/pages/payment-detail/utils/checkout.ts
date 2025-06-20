import type { PaymentDetailFormType } from '@/shared/types/payment-detail-form';
import type { paymentDetailType } from "@/shared/types/billingDetail";



export  const handlePaymentDetailFormSubmission = ({e,formData,setFormData}:PaymentDetailFormType) => {
        e.preventDefault();
        console.log("formData:",formData)
    
        const requiredFields: (keyof paymentDetailType)[] = [
            "address",
            "city",
            "state",
            "zipCode",
            "cardNumber",
            "name",
            "ccvCode",
        ];

        const missingFields = requiredFields.filter((field) => !formData[field]?.trim());

        if (missingFields.length > 0) {
            alert("Please fill all required fields.");
            return;
        }


        setFormData({
            address: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
            cardNumber: "",
            name: "",
            ccvCode: "",
        })
    };

    export const handleChange = (field:string, value:string,setFormData:React.Dispatch<React.SetStateAction<paymentDetailType>>) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };