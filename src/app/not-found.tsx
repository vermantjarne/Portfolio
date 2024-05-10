import Link from "next/link";

const NotFound = () => {
    
    return (
        <div className="text-center flex flex-col min-h-full justify-center mb-32">
            <h1 className="text-5xl text-blue-800 font-bold mb-4">Oops!</h1>
            <p className="text-lg">The page you were searching for does not exist.</p>
            <p className="text-lg">
                Navigate back to the <Link href="/" className="text-blue-500">homepage</Link>.
            </p>
        </div>
    );
};

export default NotFound;