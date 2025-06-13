
import { ContactForm } from './ContactForm';

export function ContactUs() {
    return (
        <main className="min-h-screen max-w-[1300px] mx-auto px-5 pt-16 pb-24 text-white ">
            <p className="text-[28px] leading-[29px] mb-2 Gilroy-black">Contact Us</p>
            <p className="text-[28px] leading-[29px] mb-2 Gilroy-semibold">Open a Tickets</p>
            <p className="text-[15px] leading-[19px] Gilroy-normal capitalize text-gray-300">
                Can’t find what you are looking for? Fill in the form below and contact our support team
            </p>
            <div className="">
                <ContactForm />
            </div>
        </main>
    );
}
