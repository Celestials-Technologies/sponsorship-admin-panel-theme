import { Link } from "react-router-dom";
import { SponsorshipTable } from "@/widgets/table/ui/SponsorshipTable"
import AffiliateLink from "@/widgets/affiliate-link/ui/AffiliateLink";
import SponsersSection from "@/widgets/sponsers/ui/SponsersSection";


export function DashboardHome() {

    return (
        <>
            <SponsorshipTable
                heading="Download the Historical Sponsorship Database"
                count="1"
            />
            <h2 className="Poppins font-bold text-xl sm:text-[28px] text-gray-50 text-center mt-12 mb-5">Give <span className="text-primary">ConnectSponsors</span> to your friends!</h2>
            {/* Affiliate Link */}
            <AffiliateLink />
            {/* Sponsers */}
            <div className="text-gray-50">
                <div className="flex flex-col gap-5 justify-center items-center text-center capitalize">
                    <h2 className="font-bold text-[20px] sm:text-[24px] lg:text-[28px] max-w-3xl mt-12 Gilroy-bold">These sponsorship partners have actively contacted us to be your  <span className="text-primary">long-term sponsor</span></h2>
                    <p className="text-base sm:text-lg md:text-xl max-w-4xl ">For better deals with our featured sponsorship partners: Feel free to contact them and mention that you came from “ConnectSponsors” (we take 0% of your negotiated deals)</p>
                    <p className="">Your account does not have access to our Featured sponsorship partners</p>
                    <p className=""> <Link to="/" className="text-primary underline"> Click Here </Link> to gain access</p>
                </div>
                <SponsersSection />
            </div>
        </>

    )
}
