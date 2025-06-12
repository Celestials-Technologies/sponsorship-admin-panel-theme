import { OfferSection } from "@/widgets/offer-section/ui/OfferSection";
import { NewsLetter } from "@/features/newsLetter/ui/NewsLetter";
import { SponserSection } from "@/widgets/sponsers-section/ui/SponserSection";

export function FeaturedSponsorshipOpportunities() {

    return (
        <>
            {/* Sponsers */}
            <div className="text-gray-50 py-4 mt-12 text-center" >
                <h1 className="text-2xl lg:text-3xl font-bold Gilroy-bold">Featured Sponsorship <span className="text-primary">Opportunities</span> </h1>
                <SponserSection />
            </div>
            {/* Offers */}
            <OfferSection />
            {/* NewsLetter */}
            <NewsLetter />
        </>
    )
}
