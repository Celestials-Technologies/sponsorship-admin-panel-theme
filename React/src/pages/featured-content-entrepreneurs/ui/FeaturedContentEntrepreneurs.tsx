import { OfferSection } from "@/widgets/offer-section/ui/OfferSection";
import { NewsLetter } from "@/features/newsLetter/ui/NewsLetter"
import { SponserSection } from "@/widgets/sponsers-section/ui/SponserSection";


export function FeaturedContentEntrepreneurs() {
    return (
        <>
            {/* Sponsers */}
            <div className="text-gray-50 py-4 mt-12 text-center min-h-[60vh]" >
                <h1 className="text-2xl lg:text-3xl font-bold Gilroy-bold">Featured Content <span className="text-primary">Entrepreneurs</span> </h1>
                <SponserSection />
            </div>
            {/* Offers */}
            <OfferSection />
            {/* NewsLetter */}
            <NewsLetter />

        </>
    )
}
