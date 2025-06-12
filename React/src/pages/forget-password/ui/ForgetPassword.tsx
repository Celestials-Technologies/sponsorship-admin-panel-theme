import AuthForm from "@/widgets/auth/ui/AuthForm"
import { Input } from "@/shared/ui/Input"
import { Button } from "@/shared/ui/Button"

export function ForgetPassword() {
    return (
        <>
            <div className="text-gray-50 pt-30">
                <AuthForm
                    title="Reset Account Password"
                    titleDescription="Enter A new Password"
                    submitButtontext="Reset Password">
                    <div className="space-y-6 mb-10">
                        <Input type="password" placeholder='Password' />
                        <div className="flex justify-center items-center bg-gray-50 mb-14">
                            <Input type="password" placeholder='Confirm Password *' className="focus-visible:ring-0 focus-visible:border-transparent" />
                            <Button
                                icon={<i className="fa-regular fa-eye  text-gray-600  hover:text-gray-800 "></i>}
                                className="bg-transparent hover:bg-transparent" />
                        </div>
                    </div>
                    <Button
                        label="Forget Password"
                        className="w-full absolute left-0 bottom-30 cursor-pointer rounded-none rounded-b-xl hover:bg-primary"
                    />
                </AuthForm>
            </div>
        </>
    )
}
