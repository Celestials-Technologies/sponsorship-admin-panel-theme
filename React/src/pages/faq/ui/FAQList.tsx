import CustomDiv from '@/shared/ui/CustomDiv';
import FAQCard from './FAQCard';
import { questions } from "../model/FAQ"

export default function FAQList() {
    return (
        <CustomDiv style="!p-2 sm:p-8 !pt-9">
            {questions.map((faq, idx) => (
                <FAQCard key={idx} question={faq.question} answer={faq.answer} />
            ))}
        </CustomDiv>
    );
}
