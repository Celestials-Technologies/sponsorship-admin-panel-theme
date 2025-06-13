import Header from './Header';
import FAQList from './FAQList';
import ConnectSponsersLogo from '@/shared/ui/ConnectSponsersLogo';
import FaqIcon from './FaqIcon';
import ArrowRightIcon from './ArrowRightIcon';
export function FAQ() {
    return (
        <main className="min-h-screen bg-bgPrimary !p-0">
            <Header />
            <div className="w-full max-w-7xl pt-[38px] pb-[106px] px-2 sm:px-5 mx-auto">
                <div className="flex gap-3 items-center">
                    <span className="text-[16px] sm:text-[19px] text-white Gilroy-medium capitalize">
                        All Collections
                    </span>
                    <ArrowRightIcon className="inline-block" />
                    <span className="text-[16px] sm:text-[19px] text-white opacity-60 Gilroy-medium capitalize">
                        GetSponsored.AI FAQs
                    </span>
                </div>
                <div className="mt-[30px] mb-2.5">
                    <FaqIcon />
                    <ConnectSponsersLogo className='text-[29px] text-left ' />
                </div>
                <FAQList />
            </div>
        </main>
    );
}
