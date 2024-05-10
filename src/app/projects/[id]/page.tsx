"use client"
import { notFound, redirect } from "next/navigation";
import { projects } from "../data";
import { useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight, ArrowSquareLeft, ArrowSquareRight } from "@phosphor-icons/react/dist/ssr";

const projectDetails = ({ params }: {
    params: { id: string }
}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const project = projects.find((project) => project.id === params.id);

    // If project is not found, redirect to not found page
    if (!project) {
        notFound();
    }
    
    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.imageNames.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.imageNames.length - 1 : prevIndex - 1
        );
    };
    
    return (
        <div className="container lg:max-w-[70%] xl:max-w-[50%] flex flex-wrap flex-col items-center gap-6 text mb-6">
            {/*<img src={`/images/projects/${project.id}/${images[0]}`} className="top-0 absolute w-full h-80 object-cover"/>*/}
            <h1 className="text-gray-800 text-3xl font-bold mt-6 mb-6">{project.title}</h1>
            <div className="relative w-full h-40 md:h-80 flex justify-center">
                <img src={`/images/projects/${project.id}/${project.imageNames[currentImageIndex]}.png`} className="w-[90%] h-full object-scale-down"/>
                <button>
                    <ArrowSquareLeft size={32} onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
                </button>
                <button>
                    <ArrowSquareRight size={32} onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
                </button>
            </div>
            <div className="w-[90%] mt-6">
                <h2 className="text-gray-700 text-xl font-bold mb-6 text-center">Introduction</h2>
                <p className="text-justify whitespace-pre-line" dangerouslySetInnerHTML={{ __html: project.introduction || '' }} ></p>
            </div>
            <div className="w-[90%] mt-6">
                <h2 className="text-gray-700 text-xl font-bold mb-6 text-center">Description</h2>
                <p className="text-justify whitespace-pre-line" dangerouslySetInnerHTML={{ __html: project.description || '' }} ></p>
            </div>
        </div>
    );
};

export default projectDetails;