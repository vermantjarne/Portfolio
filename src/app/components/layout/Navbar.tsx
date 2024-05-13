import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div>
                <Link href="/">
                    <p className="text-white text-xl font-bold hover:text-yellow-100 transition-all duration-300">Jarne Vermant</p>
                </Link>
                </div>
                <div>
                    <ul className="flex gap-8 text-sm">
                        <li>
                            <Link href="/about" className="group relative text-white hover:text-yellow-100 transition-all duration-300">
                                <p>About Me</p>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-100 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ marginBottom: "-4px"}}></span>
                            </Link>
                            </li>
                            <li>
                            <Link href="/projects" className="group relative text-white hover:text-yellow-100 transition-all duration-300">
                                <p>Projects</p>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-100 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ marginBottom: "-4px"}}></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    );
};

export default Navbar;