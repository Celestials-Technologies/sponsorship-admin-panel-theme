import { Input } from "@/shared/ui/Input";
import EditIcon from "./EditIcon";
import { Button } from "@/shared/ui/Button";
import CustomDiv from "@/shared/ui/CustomDiv";
export default function AffiliateDashboard() {
    return (
        <div className="w-full mt-20 xl:max-w-[505px] mx-auto sm:mx-0">

            <h1 className="text-[38px] md:text-[45px] lg:text-[54px] leading-[48px] md:leading-[54px] lg:leading-[64px] Gilroy-bold mb-[25px]">
                <span className="text-primary">Affiliate</span>
                <span className="text-white"> Dashboard</span>
            </h1>

            <section className="mb-[17px]">
                <p className="text-xl leading-[29px] text-white Gilroy-medium mb-0.5">Paypal Email</p>
                <div className="flex justify-center items-center gap-3">
                    <div className="w-full">
                        <Input
                            type="email"
                            placeholder="Type Here"
                            className="px-[13px] py-3.5 h-[45px] placeholder:text-[#00000033] rounded-xl max-w-[461px]"
                            label="Used for payouts"
                        />
                    </div>
                    <Button variant="ghost" className="hover:bg-transparent" icon={<EditIcon className="relative top-3" />} />

                </div>
            </section>

            <p className="text-[15px] leading-6 text-white Gilroy-normal capitalize mb-5">
                Sign up to our program and start earning money by<br />
                bringing users to ConnectSponsors
            </p>
            <Button
                className="rounded-full h-[44px] w-[192px] text-[17px]"
                label="Start Earning Money "
            />


            {/* Earnings Section */}
            <section className="mt-7">
                <h3 className="text-[28px] leading-7 text-white Gilroy-extrabold capitalize mb-5">Your Earnings</h3>
                <div className="flex flex-col sm:flex-row gap-[15px]">
                    {[
                        { title: "Total Earning", amount: "$0" },
                        { title: "Upcoming Payouts", amount: "$0" },
                    ].map((item, idx) => (
                        <CustomDiv
                            key={idx}
                            style="w-[245px] mx-auto rounded-3xl"
                        >
                            <p className="text-xl leading-[29px] text-white text-center Gilroy-medium mb-2.5">{item.title}</p>
                            <p className="text-[39px] leading-[37px] text-white text-center Gilroy-bold">{item.amount}</p>
                        </CustomDiv>
                    ))}
                </div>
            </section>

            {/* Analytics Section */}
            <section className="mt-[23px]">
                <h3 className="text-[28px] leading-7 text-white Gilroy-extrabold capitalize mb-5">Analytics</h3>
                <div className="flex flex-col sm:flex-row gap-[15px]">
                    <CustomDiv style="flex flex-col items-center justify-center !rounded-2xl h-[310px] max-w-[400px] mx-auto">
                        <p className="text-2xl leading-[29px] text-white text-center Gilroy-semibold mb-2.5">Conversions</p>
                        <div className="w-[156px] h-[156px] rounded-full border-[8px] border-primary flex justify-center items-center">
                            <span className="text-[71px] leading-[70px] text-white Gilroy-bold">0</span>
                        </div>
                        <p className="text-[15px] leading-[21px] text-white text-center Gilroy-medium capitalize opacity-70 mt-[7px]">
                            Share your affiliate link above to start making passive income!
                        </p>
                    </CustomDiv>

                    <div className="flex flex-col gap-[15px] w-full max-w-[245px] mx-auto">
                        {[
                            { title: "Total Referrals", value: 0 },
                            { title: "Currently in Trial", value: 0 },
                            { title: "Expired Trial", value: 0 },
                        ].map((stat, idx) => (
                            <CustomDiv
                                key={idx}
                                style="flex !p-2 flex-col rounded-2xl leading-[29px] text-white text-center Gilroy-bold h-[93px]"
                            >
                                <p className="text-[20px] mb-2.5">{stat.title}</p>
                                <p className="text-[43px]">{stat.value}</p>
                            </CustomDiv>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
