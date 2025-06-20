export interface PlanFeaturesType {
  allow: string[];
  missing: string[];
}

export interface PlansType {
  [planName: string]: PlanFeaturesType;
}

export interface useFetchPlansType{
  plans:PlansType;
  isFetching : boolean;
  error:{message:string}

} 

export  interface onCloseFunType {
    onClose:(showUpgradeModal:string)=>void
}
