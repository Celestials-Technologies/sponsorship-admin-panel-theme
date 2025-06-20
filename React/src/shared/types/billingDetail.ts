
interface BillingAddress {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface CardBase {
  cardNumber: string;
  ccvCode: string;
}

interface CardDetailNumber extends CardBase {
  expirydate: string;
}

interface CardDetailName extends CardBase {
  name: string;
}

export type billingDataType = BillingAddress & CardDetailNumber;
export type paymentDetailType = BillingAddress & CardDetailName;
