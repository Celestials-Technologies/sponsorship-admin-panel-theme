export function RadioInput({ id, name, label, center = false }) {
    return (
        <div className={`flex items-center gap-3 mb-[18px] ${center ? 'text-center justify-center flex-col' : ''}`}>
            <div className="relative w-6 h-6">
                <input
                    type="radio"
                    id={id}
                    name={name}
                    className={`appearance-none w-[25px] h-[25px] border ${center ? "border-white" : "border-[#e59528]"} rounded-full bg-transparent cursor-pointer peer checked:bg-[#e59528] transition-colors duration-200`}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
            </div>
            <label
                htmlFor={id}
                className={`text-base sm:text-[19px] leading-[27px] Gilroy-medium text-white block pt-1 cursor-pointer ${center ? 'mt-2' : ''}`}
            >
                {label}
            </label>
        </div>
    );
}
