import ConnectSponsersLogo from "@/shared/ui/ConnectSponsersLogo";
import SearchBar from "./SearchBar";
import WorldIcon from "./WorldIcon";
import ArrowDownIcon from "./ArrowDownIcon";

export default function Header() {
    return (
        <header className="bg-[url('/images/FaqHeaderBackground.png')] bg-no-repeat bg-cover">
            <div className="w-full max-w-7xl pt-10 pb-8 px-5 mx-auto h-[215px]">
                <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
                    <ConnectSponsersLogo />
                    <button
                        type="button"
                        className="flex items-center gap-1 text-[15px] text-white Gilroy-semibold"
                    >
                        <WorldIcon />
                        <span>English</span>
                        <ArrowDownIcon />
                    </button>
                </div>
                <SearchBar />
            </div>
        </header>
    );
}
