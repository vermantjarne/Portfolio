export type ProjectTag =
    'School' |
    'Prototype' |
    'React' |
    'PHP' |
    'Flutter' |
    'Wikitude';


export interface ProjectDetails {
    introduction?: string;
    description?: string;
    personalGrowth?: string;
    contributors?: string[];
}


export interface Project extends ProjectDetails {
    id: string;
    title: string;
    shortDescription: string;
    imageNames: string[];
    tags: ProjectTag[];
}

