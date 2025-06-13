import DollarIcon from "./DollarIcon"
import CommingSoon from '@/shared/ui/CommingSoon'
export function Reseller() {
    return (
        <CommingSoon
            Icon={DollarIcon}
            title="Start selling ConnectSponsors to your clients!"
            description="If you're one of our clients on the “Enterprise” packages, you can invite your clients to join ConnectSponsors, and automatically create their accounts. To give them an even bigger “wow” factor, consider activating our Custom Branding & Custom Domain feature."
            shape="rounded"
        />
    )
}
