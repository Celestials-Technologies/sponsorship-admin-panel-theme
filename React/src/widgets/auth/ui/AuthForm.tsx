import { Button } from "@/shared/ui/Button"
import ConnectSponsersLogo from "@/shared/ui/ConnectSponsersLogo";
import GoogleIcon from "./GoogleIcon"
import MicrosoftIcon from "./MicrosoftIcon"
import { Link, Form, useLocation } from 'react-router-dom'
import { FreeTrailWorkingStep } from "../model/constant"


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

                {currentPath.startsWith("/loginDetail") && <div
                    className="hidden lg:block absolute -right-62 top-22 rounded-e-2xl border border-[#e5e5e585] pt-7 pr-5 pb-8 pl-2 w-[250px] h-[360px] bg-gradient-to-r from-[#261A7E] to-[#191155]">
                    <p className="text-sm md:text-base leading-[18px] text-white Gilroy-bold mb-0">How our free Trial Works
                    </p>
                    <div className="flex gap-2 pl-2.5 mt-5">
                        <div>
                            {FreeTrailWorkingStep.map((step, index) => (
                                <div className="mb-1">
                                    <div className="flex gap-2">
                                        <div className={`w-[18px] h-[18px] rounded-full ${index === 1 && "bg-[#ffa51f40]"} flex justify-center items-center`}>
                                            <div className={`w-3 h-3 rounded-full ${step.active ? "bg-primary" : "border border-gray-400 "} flex justify-center items-center `}>
                                                {step.active && <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7"
                                                    viewBox="0 0 9 7" fill="none">
                                                    <path d="M1.14844 4L3.64844 6L8.14844 0.5" stroke="white"
                                                        stroke-linecap="round" />
                                                </svg>}
                                            </div>
                                        </div>
                                        <p className="text-xs font-bold text-wrap text-left">
                                            {step.title}</p>
                                    </div>
                                    <div className={`${FreeTrailWorkingStep.length - 1 !== index && "border-l"} ${step.active ? "border-primary" : "border-gray-400 "}  relative top-1 ml-[9px] h-[45px] -mt-[5px]`}>
                                        <p className="text-left w-[210px] text-[10px] text-gray-400  pl-4">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>}
            </Form>
        </>
    )
}

