import AffiliateLink from '@/widgets/affiliate-link/ui/AffiliateLink'
import AffiliateDashboard from './AffiliateDashboard'
import SuccessKit from './SuccessKit'

export function Affiliate() {
    return (
        <main className="min-h-screen pt-15 px-2 sm:px-4 flex justify-between  gap-3 flex-col xl:flex-row max-w-[1300px] mx-auto">
            <AffiliateDashboard />
            <div className="">
                <AffiliateLink />
                <SuccessKit />
            </div>
        </main>

    )

}
