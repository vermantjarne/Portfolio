import React from "react";
import { ProjectTag } from "../types";
import Link from "next/link";

interface Props {
    id: string;
    title: string;
    description: string;
    coverImageSource: string;
    tags: ProjectTag[];
}

const Card: React.FC<Props> = ({ id, title, description, coverImageSource, tags }) => {
    return (
        <Link href={`/projects/${id}`} className="bg-gray-200 drop-shadow-lg rounded-lg overflow-hidden hover:rotate-1 hover:translate-y-1.5 hover:scale-95 transition duration-500">
            <div className="flex block w-full h-40">
                <img className="flex-grow object-cover" src={coverImageSource} alt={`Cover image of the project: ${title}`} />
            </div>
            <div className="px-6 py-4">
                <div className="overflow-hidden line-clamp-1 font-bold text-xl mb-2">{title}</div>
                <p className="overflow-hidden leading-[1.5rem] h-[6rem] line-clamp-4 text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="overflow-hidden line-clamp-1 px-6 pt-2 mb-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
};

export default Card;