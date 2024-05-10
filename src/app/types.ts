export type ProjectTag =
    'School' |
    'Prototype' |
    'React' |
    'PHP' |
    'Flutter' |
    'Wikitude';


export interface Paragraphs {
    introduction?: string;
    description?: string;
}


export interface Project extends Paragraphs {
    id: string;
    title: string;
    shortDescription: string;
    imageNames: string[];
    tags: ProjectTag[];
}