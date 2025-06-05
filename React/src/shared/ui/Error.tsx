
export function Error({ message }) {
    return (
        <div className="text-center text-white py-20">
            <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
            <p className="mt-4 text-lg">Something went wrong.</p>
            {message && <p className="mt-2 text-gray-400">{message}</p>}
        </div>
    );
}
