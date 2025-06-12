export function PlanFeatureBadge({ label }) {
    return (
        <div className="flex justify-center items-center gap-1 bg-primary p-[9px] w-[110px] h-[34px] rounded-xl border border-[#e5e5e585]">
            <div className="w-3 h-3 rounded-full bg-primary-button flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" fill="none" viewBox="0 0 8 6">
                    <path d="M1 3.14L3.1 5.29 7 1" stroke="white" strokeWidth="0.86" strokeLinecap="round" />
                </svg>
            </div>
            <span className="text-[13.72px] leading-4 Gilroy-medium text-white text-nowrap">{label}</span>
        </div>
    );
}



