export interface SinglePlanType {
  label: string;
  fee: string;
  btnText: string;
  discounted?: string;
}

export interface PlanTypes {
  [key: string]: SinglePlanType;
}

export  const planTypes:PlanTypes = {
        free: { label: "Free", fee: "$0.00", btnText: "hide" },
        startup: { label: "Startup Plan", fee: "$497", btnText: "Confirm The Upgrade" },
        pro: { label: "Pro Plan", fee: "$497", discounted: "$416", btnText: "Confirm The Upgrade" },
        enterprise: {
            label: "Enterprise Plan",
            fee: "Everything included in the Pro Plan, Plus:",
            btnText: "Book A Call",
        },
    };

    export const currentFeatures:string[] = ["10 Credits", "1 Brand", "2 Users", "Live Support"];
    export const newFeatures:string[]  = ["100 Credits", "5 Brand", "20 Users", "Live Support"];