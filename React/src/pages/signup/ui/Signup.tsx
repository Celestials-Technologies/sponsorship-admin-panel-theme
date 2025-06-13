import AuthForm from '@/widgets/auth/ui/AuthForm'
import { Link } from 'react-router-dom'
import { Input } from '@/shared/ui/Input'

export function Signup() {
    return (
        <div className="text-gray-50 pt-30">
            <AuthForm title="#1 most used tool to find & convert sponsorship opportunities"
                titleDescription="Signup & get 10 Free Sponsorship opportunities every month"
                submitButtonText="Sign up for free & get 10 new  sponsorship opportunities every month">
                <div className=" space-y-6">
                    <Input type="password" placeholder='Password *' className='rounded-lg' />
                    <Input type="email" placeholder='Email' className='rounded-lg' />
                </div>
                <p className="capitalize text-[14px] mt-6 mb-2">By registering you agree to our
                    <Link to="/" className='text-primary underline hover:opacity-70'> Terms of use</Link>
                </p>
            </AuthForm>
        </div>
    )
}
