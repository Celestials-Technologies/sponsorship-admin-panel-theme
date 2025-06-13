import { Testimonials } from "../model/constant";
import { TestimonialCard } from "./TestimonialCard";

export function PaymentDetail() {
    return (
        <section className="bg-secondary py-[70px]">
            <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center">
                <div className="flex flex-col justify-center gap-[38px] w-full">
                    {/* Testimonials */}
                    <div className="flex flex-col md:flex-row justify-center gap-3.5 md:overflow-hidden">
                        {Testimonials.map((t, index) => (
                            < TestimonialCard key={index} text={t.text} name={t.name} role={t.role} imgSrc={t.imgSrc} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
