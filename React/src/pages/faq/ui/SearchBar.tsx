import SearchIcon from "./SearchIcon"

export default function SearchBar() {
    return (
        <div className="flex items-center justify-center gap-2 w-full h-[50px] sm:h-[56px] max-w-[860px] border border-[#cbcbcb] rounded-xl py-[18px] px-4 bg-[rgba(171,157,179,0.4)] backdrop-blur-[3px] mt-9 mx-auto">
            <SearchIcon />
            <input
                type="search"
                placeholder="Search for Article"
                className="w-full outline-none border-none text-[19px] text-white Gilroy-medium placeholder:text-white capitalize bg-transparent"
            />
        </div>
    );
}
