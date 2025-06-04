import { Button } from "@/shared/ui/Button"
import ConnectSponsersLogo from "@/shared/ui/ConnectSponsersLogo";
import GoogleIcon from "./GoogleIcon"
import MicrosoftIcon from "./MicrosoftIcon"
import { Link, Form, useLocation } from 'react-router-dom'


export default function AuthForm({ title = "", titleDescription = "", submitButtonText = "submit", children }) {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            <Form className="relative max-w-[473px] text-center mx-auto text-gray-50 Gilroy-normal ">
                <ConnectSponsersLogo className="text-[34px] Gilroy-extrabold" />
                <div className=" space-y-3 border-[1.4px]  border-gray-100 rounded-2xl p-4 px-6 my-4 mb-8 text-center bg-gradient-to-r from-[#261A7E] to-[#191155]">
                    <h3 className="text-[26px] sm:text-2xl Gilroy-bold tracking-[1px]  ">{title}</h3>
                    <p className={` ${currentPath.startsWith("/signUp") && "text-primary"} text-[18px] leading-[23px] sm:text-lg max-w-[300px] mx-auto mt-[20px] mb-[21px] `}>{titleDescription}</p>
                    <div className="flex sm:flex-row flex-col items-center gap-4 ">
                        <Button
                            label="Login With Google"
                            icon={<GoogleIcon />}
                            variant="outline"
                            className="p-5 py-6 w-[200px] rounded-lg mx-auto justify-between"
                        />
                        <Button
                            label="Login With Microsoft"
                            icon={<MicrosoftIcon />}
                            variant="outline"
                            className="p-5 py-6 w-[200px] rounded-lg mx-auto justify-between"
                        />
                    </div>
                    <span className="block relative text-[#665f9c] text-sm before:content-[''] after:content-[''] before:absolute after:absolute before:left-14 after:right-14 before:top-1/2 after:top-1/2 before:h-[0.1px] after:h-[0.1px] before:w-1/3 after:w-1/3 before:bg-[#665f9c] after:bg-[#665f9c] text-center my-[20px] mb-[14px]">or</span>

                    {children}

                </div>

                <Button
                    label={submitButtonText}
                    className="bg-primary-button p-6 py-[28px] pt-[30px] rounded-full Gilroy-normal text-[15px] text-wrap min-w-[170px] max-w-[391px]"
                />
                {currentPath.startsWith("/signUp") ? <p className="text-sm font-semibold my-4">Do you have an account ?  <Link to="/login" className="text-primary mx-1 hover:opacity-70">Login</Link></p> : <p className="my-4">Don't you have an account ?  <Link to="/signup" className="text-primary mx-1">Sign Up</Link></p>}
            </Form>
        </>
    )
}

