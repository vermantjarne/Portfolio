import { Icon } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface Props {
    title: string,
    description: string,
    href: string,
}

const LargeLink: React.FC<Props> = ({ title, description, href }) => {
    return (
        <Link href={href} passHref className="block w-full max-w-[400px] ring-orange-200 ring-2 ring-opacity-50 bg-gradient-to-br from-gray-200 to-orange-100 rounded-lg shadow-lg p-6 transition-transform transform duration-300 hover:scale-105 hover:from-gray-300 hover:to-orange-100">
            <div className="flex items-center justify-between">
                <p className="text-2xl text-gray-700 font-semibold">{title}</p>
                <ArrowRight className="text-gray-700 w-6 h-6" />
            </div>
            <p className="text-gray-700 mt-2">{description}</p>
        </Link>
    );
};

export default LargeLink;