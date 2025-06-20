import type { paymentDetailType } from "./billingDetail";
export type PaymentDetailFormType = {
    e:React.FormEvent;
    formData:paymentDetailType;
    setFormData:React.Dispatch<React.SetStateAction<paymentDetailType>>
}

