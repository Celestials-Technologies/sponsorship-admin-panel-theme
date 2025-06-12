import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Link } from "react-router-dom";

export function ContactForm() {
    return (
        <form action="#/" className="mt-[25px]">
            <div className="flex sm:flex-row flex-col gap-x-[25px] mb-[15px]">

                {/* Name Field */}
                <div className="sm:w-1/2 w-full">
                    <Input
                        type="text"
                        placeholder="Type Here"
                        className="block w-full bg-white px-[13px] py-3.5 h-[45px] placeholder:text-[#00000033] rounded-xl"
                        label="Name"
                    />
                </div>

                {/* Email Field */}
                <div className="sm:w-1/2 w-full">
                    <Input
                        type="email"
                        placeholder="Type Here"
                        className="block w-full bg-white px-[13px] py-3.5 h-[45px] placeholder:text-[#00000033] rounded-xl"
                        label="Reply to Email"
                    />
                    <p className="text-[15px] leading-[19px] text-white Gilroy-normal capitalize mt-2">
                        Your account’s email address: <span className="">ltvspot@reserchway.co</span>
                    </p>
                </div>
            </div>


            {/* Message Textarea */}
            <div className="w-full">
                <label className="inline-block text-[15px] leading-[19px] text-white Gilroy-medium mb-2">
                    Message
                </label>
                <textarea
                    placeholder="For assistance regarding your sites, please provide the site’s name ogeher with your question(s)."
                    className="resize-none block w-full bg-white px-[13px] py-3.5 h-[45px] placeholder:text-[#00000033] rounded-xl min-h-[210px]"
                ></textarea>
            </div>

            {/* Privacy Text */}
            <p className="text-[15px] leading-[19px] text-white Gilroy-normal mt-2">
                For more details, review our <Link to="/" className="text-primary underline">Privacy Policy</Link>
            </p>

            {/* Submit Button */}
            <div className="text-right">
                <Button
                    className="rounded-full w-[133px] py-5.5 text-[18px] Gilroy-medium "
                    label="Send"
                />
            </div>
        </form>
    );
}
