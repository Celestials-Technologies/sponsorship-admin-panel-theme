import { useFetchOffers } from "../api/useFetchOffers";
import { PartnerDetail } from "./PartnerDetail";
import { Error } from "@/shared/ui/Error";
import { Loader } from "@/shared/ui/Loader";



export function OfferSection({ }) {

    const { offers, isFetching, error } = useFetchOffers()

    return (
        <div className="text-gray-50 py-4 mt-12 text-center" >
            <h1 className="text-xl sm:text-3xl lg:text-4xl max-w-xl mx-auto leading-10 sm:leading-13 font-bold Gilroy-bold">Check Out The Generous Offers  From  <span className="text-primary">Our Partner </span>Below </h1>
            {(error && <Error message={error.message} />)}
            {isFetching && <Loader message="Loading Offers..." />}
            {(!isFetching && offers.length === 0) && <p className="text-white font-bold p-2 border-2 border-primary">You currently have no Offer to show here!</p>}
            {(!isFetching && offers.length > 0) && offers.map(partner => (
                <PartnerDetail
                    key={partner.name}
                    imgSrc={partner.imageSrc}
                    name={partner.name}
                    description={partner.description} />
            ))}
        </div>

    )
}
