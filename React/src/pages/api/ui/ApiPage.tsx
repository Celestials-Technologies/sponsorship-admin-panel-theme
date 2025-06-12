import ApiIcon from "./ApiIcon"
import CommingSoon from '@/shared/ui/CommingSoon'

export function ApiPage() {
    return (
        <CommingSoon
            Icon={ApiIcon}
            title="Sponsorships API for Developers"
            description="ConnectSponsors offers a public API that lets you directly import your chosen sponsorship leads into your CRM or outreach tool. To start building, upgrade to our Enterprise Plan and create your API key below."
            extraDes="For technical information, please look at our API documentation."
        />
    )
}