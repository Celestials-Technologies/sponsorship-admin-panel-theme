
export function Loader({ message = "Loading..." }) {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full py-10">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-white text-lg">{message}</p>
        </div>
    );
}
