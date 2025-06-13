import { Form } from 'react-router-dom';
import { formSubmissionHandler } from '../utils/inputValidation';
import { useState } from 'react';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function YoutubeInputForm() {
    const [errors, setErrors] = useState([])

    return (
        <>
            {errors.length > 0 && (
                <div className="bg-red-100 text-red-700 rounded-md p-4 my-4">
                    <ul className="list-disc list-inside text-sm">
                        {errors.map((err, i) => (
                            <li key={i}>{err}</li>
                        ))}
                    </ul>
                </div>
            )}

            <Form onSubmit={(e) => formSubmissionHandler(e, setErrors)} className="mt-[25px]">
                <div className="flex sm:flex-row flex-col gap-x-[25px] mb-[15px]">
                    <div className="sm:w-1/2 w-full">
                        <Input type="text" name="channel-name" placeholder="Type Here" label="Channel Name" className="rounded-xl" />
                    </div>
                    <div className="sm:w-1/2 w-full">
                        <Input type="text" name="channel-url" label="Channel URL" placeholder="Type Here" className="rounded-xl" />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col gap-x-[25px] mb-[15px]">
                    <div className="sm:w-1/2 w-full">
                        <Input
                            type="text" placeholder="Type Here" name="category"
                            label={
                                <>
                                    Category <span className="text-primary">(Optional)</span>
                                </>
                            } className="rounded-xl" />
                    </div>
                    <div className="sm:w-1/2 w-full">
                        <Input type="email" name="email" label="Your Email" placeholder="Type Here" className="rounded-xl" />
                    </div>
                </div>
                <div className="w-full">
                    <label className="inline-block text-[15px] leading-[19px] mb-1">
                        Why Should We Track This Channel? <span className="text-primary">(Optional)</span>
                    </label>
                    <textarea placeholder="Type Here" name="description" className="resize-none block w-full bg-white text-black  px-[13px] py-3.5 h-[45px] placeholder:text-[#00000033]  rounded-xl min-h-[210px]"></textarea>
                </div>
                <div className="text-right mt-[25px]">
                    <Button label="Send" type='submit' variant="outline" className="rounded-full bg-primary p-5 px-9 text-lg text-white text-center" />
                </div>
            </Form>
        </>
    )
}
