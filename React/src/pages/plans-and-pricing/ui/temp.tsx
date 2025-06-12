




export function PlanFeatureBadge({ label }) {
    return (
        <div className="flex justify-center items-center gap-1 bg-btnSecondary p-[9px] h-[34px] rounded-xl border border-[#e5e5e585]">
            <div className="w-3 h-3 rounded-full bg-btnPrimary flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" fill="none" viewBox="0 0 8 6">
                    <path d="M1 3.14L3.1 5.29 7 1" stroke="white" strokeWidth="0.86" strokeLinecap="round" />
                </svg>
            </div>
            <span className="text-sm leading-4 Gilroy-medium text-white">{label}</span>
        </div>
    );
}
















import UpgradeHeader from './UpgradeHeader';
import { UpgradePlans } from './UpgradePlans';
import CustomDiv from '@/shared/ui/CustomDiv';

export default function UpgradePage() {
    return (
        <div className="flex justify-center items-center px-[25px] min-h-screen bg-bgPrimary">
            <div className="w-full max-w-[581px] mx-auto">
                <h1 className="text-[29px] leading-9 Gilroy-extrabold text-primary text-center mb-8">Confirm Startup Plan</h1>
                <CustomDiv style="bg-gradient border border-[#e5e5e585] rounded-[15px]">
                    <UpgradeHeader />
                    <UpgradePlans />
                </CustomDiv>
            </div>
        </div>
    );
}
