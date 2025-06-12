import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import CustomDiv from '@/shared/ui/CustomDiv'
import { Input } from '@/shared/ui/Input'

export default function PasswordForm() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        let valid = true
        const newErrors = {}

        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
            valid = false
        }

        if (confirmPassword !== password) {
            newErrors.confirm = 'Passwords do not match'
            valid = false
        }

        setErrors(newErrors)

        if (valid) {
            console.log('Password Updated:', password)
        }
    }

    return (
        <CustomDiv style="w-full max-w-[580px] min-h-[317px] rounded-xl">
            <h2 className="text-[22px] leading-[22px] Gilroy-bold text-white mb-2 capitalize">Change Password</h2>
            <p className="text-[13px] leading-5 Gilroy-normal text-white mb-4 capitalize">
                On your next login you will be using the new password
            </p>

            <form onSubmit={handleSubmit}>
                <div className="w-full mt-6">
                    <Input
                        type="password"
                        className="rounded-xl"
                        placeholder="New Password (6 Character Minimum)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="h-5 mt-1">
                        {errors?.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                </div>

                <div className="flex items-end gap-2.5 mt-3.5">
                    <div className="w-full">
                        <Input
                            type="password"
                            className="rounded-xl"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div className="h-5 mt-1">
                            {errors?.confirm && <p className="text-red-500 text-sm">{errors.confirm}</p>}
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="mb-6 w-full max-w-[98px] px-[5px] py-[22px] rounded-[10px] text-base md:text-lg Gilroy-medium"
                        label="Update"
                    />
                </div>
            </form>
        </CustomDiv>
    )
}
