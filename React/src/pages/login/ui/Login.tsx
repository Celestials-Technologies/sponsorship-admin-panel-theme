import AuthForm from "@/widgets/auth/ui/AuthForm"
import { Input } from "@/shared/ui/Input"
import { Button } from "@/shared/ui/Button"
import { Link } from "react-router-dom"
import EyeIcon from "@/shared/ui/EyeIcon"

export function Login() {
    return (
        <>
            <div className="text-gray-50 pt-30">
                <AuthForm
                    title="Login"
                    titleDescription="To find & close your sponsors"
                    submitButtonText="Login App">
                    <div className=" space-y-6 mb-10">
                        <Input type="email" placeholder='Email' />
                        <div className="flex justify-center items-center rounded-lg bg-gray-50">
                            <Input type="password" placeholder='Password *' className="focus-visible:ring-0 focus-visible:border-transparent" />
                            <Button
                                icon={<EyeIcon />}
                                variant="ghost" />
                        </div>
                    </div>
                    <Link to="/forget-Password" className="w-full py-1.5 border Gilroy-medium border-t-gray-200 bg-primary absolute left-0 bottom-30 rounded-none rounded-b-xl">Forget Passowrd</Link>
                </AuthForm>
            </div>
        </>
    )
}
