
export default function CustomDiv({ style = "", children }) {
    return (
        <div className={`pt-6 px-8 pb-7 border border-gray-400 rounded-md bg-gradient-to-r from-[#261A7E] to-[#191155]  ${style && style} `}>
            {children}
        </div>

    )
}
