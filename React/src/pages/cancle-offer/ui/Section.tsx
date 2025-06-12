export function Section({ title, children, borderTop = false, roundedTop = false, roundedBottom = false }) {
    return (
        <div
            className={`
                flex flex-col lg:flex-row gap-[43px] py-[20px] px-[15px] sm:px-[30px]
                ${borderTop ? '!bg-[#453E74] border-y border-[#635ab3a9]' : ''}
                ${roundedTop ? 'rounded-t-[20px]' : ''}
                ${roundedBottom ? 'rounded-b-[20px]' : ''}
                bg-[#302964]
            `}
        >
            <div className="w-full max-w-[348px]">
                <p className="text-base sm:text-[19px] leading-[27px] Gilroy-medium text-white">{title}</p>
            </div>
            <div className="w-full">{children}</div>
        </div>
    );
}
