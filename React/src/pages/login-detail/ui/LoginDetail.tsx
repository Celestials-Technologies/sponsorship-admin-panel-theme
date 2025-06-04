import AuthForm from "@/widgets/auth/ui/AuthForm"
import { Input } from "@/shared/ui/Input"
import { Button } from "@/shared/ui/Button"

export function LoginDetail() {
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
                                icon={<i className="fa-regular fa-eye  text-gray-600 hover:text-gray-800 "></i>}
                                className="bg-transparent hover:bg-transparent">
                            </Button>
                        </div>
                    </div>
                    <Button label="Forget Passowrd" className="w-full absolute left-0 bottom-30 rounded-none rounded-b-xl hover:bg-primary "></Button>

                </AuthForm>
            </div>
        </>
    )
}
