import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-secondary text-white">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-2xl mt-4">Oops! The page you're looking for doesn't exist.</h2>
            <p className="mt-2">It seems you followed a broken link or entered a URL that doesn't exist on this site.</p>
            <Link to="/" className="mt-4 text-blue-400 underline">Go back to Home</Link>
        </div>
    );
}
