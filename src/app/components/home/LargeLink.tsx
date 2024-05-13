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
        <Link href={href} className="block w-full max-w-[400px] bg-gray-200 rounded-lg shadow-lg p-6 transition-transform transform lg:hover:translate-y-[-0.5rem] hover:bg-gray-300">
            <div className="flex items-center justify-between">
                <p className="text-xl text-gray-800 font-semibold">{title}</p>
                <ArrowRight className="text-gray-600 w-6 h-6" />
            </div>
            <p className="text-gray-600 mt-2">{description}</p>
        </Link>
    );
};

export default LargeLink;