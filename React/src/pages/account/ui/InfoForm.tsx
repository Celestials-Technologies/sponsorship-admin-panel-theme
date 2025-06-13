import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import CustomDiv from '@/shared/ui/CustomDiv'
import { Input } from '@/shared/ui/Input'
import FileIcon from './FileIcon'

export default function InfoForm() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState()
    const [errors, setErrors] = useState({ fullName: '', email: '', file: '' })

    const handleNameSubmit = (e) => {
        e.preventDefault()
        if (!fullName.trim()) {
            setErrors(prev => ({ ...prev, fullName: 'Full Name is required' }))
            return
        }
        setErrors(prev => ({ ...prev, fullName: '' }))
        console.log('Updating full name:', fullName)
    }

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        if (!email.trim()) {
            setErrors(prev => ({ ...prev, email: 'Email is required' }))
            return
        }
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!pattern.test(email)) {
            setErrors(prev => ({ ...prev, email: 'Invalid email address' }))
            return
        }
        setErrors(prev => ({ ...prev, email: '' }))
        console.log('Updating email:', email)
    }

    const handleFileChange = (e) => {
        const selected = e.target.files[0]
        if (selected && selected.size <= 2 * 1024 * 1024) {
            setFile(selected)
            setErrors(prev => ({ ...prev, file: '' }))
            setFileName(selected.name)
        } else {
            setFile(null)
            setErrors(prev => ({ ...prev, file: 'File must be under 2MB' }))
        }
    }

    return (
        <CustomDiv style="w-full max-w-[580px] min-h-[317px] rounded-xl">
            <h2 className="text-[22px] leading-[22px] Gilroy-bold text-white mb-2 capitalize">Change Personal Information</h2>
            <p className="text-[13px] leading-5 Gilroy-normal text-white mb-4 capitalize">
                If you change email address, make sure to confirm the one after.
            </p>

            <div className="flex flex-col-reverse md:flex-row gap-3.5">
                <div className="mt-3">
                    <label className="cursor-pointer block">
                        <div className="rounded-full border-2 max-w-[100px] mx-auto border-primary p-1 flex justify-center items-center">
                            <div className="w-[87px] h-[87px] bg-primary text-xs text-white rounded-full flex flex-col justify-center items-center gap-1">
                                <FileIcon className="w-6 h-9" />
                                <span>Max 2mb</span>
                            </div>
                        </div>
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        {fileName && <p className='text-[13px] mt-1 text-center text-white'>{fileName}</p>}
                    </label>
                    <div className="h-5 mt-1">
                        {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
                    </div>
                </div>

                <div className="w-full">
                    <form onSubmit={handleNameSubmit} className="flex items-end gap-2.5">
                        <div className="w-full md:max-w-[300px]">
                            <Input
                                type="text"
                                className="rounded-xl"
                                label="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <div className="h-5 mt-1">
                                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className="mb-6 w-full max-w-[98px] px-[5px] py-[24px] rounded-[10px] text-base md:text-lg Gilroy-medium"
                            label="Update"
                        />
                    </form>

                    <form onSubmit={handleEmailSubmit} className="flex items-end gap-2.5">
                        <div className="w-full md:max-w-[300px]">
                            <Input
                                type="email"
                                className="rounded-xl"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="h-5 mt-1">
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                        </div>
                        <Button
                            type="submit"
                            className="mb-6 w-full max-w-[98px] px-[5px] py-[24px] rounded-[10px] text-base md:text-lg Gilroy-medium"
                            label="Update"
                        />
                    </form>
                </div>
            </div>
        </CustomDiv>
    )
}
