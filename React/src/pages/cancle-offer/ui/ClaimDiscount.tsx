import CustomDiv from "@/shared/ui/CustomDiv";
import { Button } from "@/shared/ui/Button";
import userImage from "@/shared/images/user_profile1.png"
import StarIcon from "./StarIcon"
import { Link } from "react-router-dom";
export default function ClaimDiscount() {

    return (
        <CustomDiv style="pt-10 mt-10 px-[10px] sm:px-[35px] w-full max-w-[521px] h-[820px] rounded-2xl overflow-auto">
            <h2 className="text-[30px] md:text-[40px] lg:text-[50px] leading-[40px] md:leading-[54px] Gilroy-extrabold text-white text-center">
                Get <span className="text-primary">50%</span><br /> discount forever!
            </h2>
            <p className="text-[21px] leading-8 Gilroy-medium text-[#fffff8] text-center mt-3 pr-3">
                Let ConnectSponsors pay for itself in your first sponsorship!
            </p>
            <div className="pt-[21px] pb-6 px-[22px] rounded-xl bg-white mt-5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={userImage} alt="Profile" />
                    </div>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="w-4 h-4 flex justify-center items-center bg-primary-button">
                                <StarIcon />
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-[15px] leading-[22px] Gilroy-medium text-[#444444] mt-2">
                    George reviewed GetSponsored.AI
                </p>
                <p className="text-base sm:text-xl leading-[26px] Gilroy-medium text-[#222222] mt-1.5">
                    "GetSponsored.ai paid for itself in my first month after securing multiple high-value sponsors
                    with their data. The 50% first-year discount made it an absolute no-brainer!"
                </p>
            </div>
            <h3 className="text-3xl leading-[31px] Gilroy-extrabold text-white mt-[50px]">
                Claim <span className="text-primary">50%</span> discount forever!
            </h3>
            <p className="text-base sm:text-xl leading-7 Gilroy-medium text-white text-left sm:text-center mt-3">
                9 out of 10 ConnectSponsors users say the sponsor leads paid for their subscriptions within the first few months, and we don't want you to miss out on this valuable opportunity!
            </p>
            <Link
                to="/payment-detail"
                className=" py-3 w-full inline-block text-center Gilroy-medium mt-8 text-base bg-primary-button hover:bg-primary rounded-full"
            >Claim 50% discount Forever</Link>
        </CustomDiv>
    )
}
