import Card from "../components/Card";
import { projects } from "./data";

const about = () => {

    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center content-center gap-6 lg:gap-8 items-center">
            {projects.map(project => {

                const coverImageSource = project.imageNames[0];

                return (
                    <Card
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.shortDescription}
                        coverImageSource={`/images/projects/${project.id}/${coverImageSource}.png`}
                        tags={project.tags}
                    />
                );
            })
            }
        </div>
    );
};

export default about;