export interface Project {
    index?: number;
    title: string;
    description: string;
    disclaimer?: string;
    content: string;
    imgSrc: string;
    link: string;
    tags: string[];
    github: string;
}

export interface Experience {
    company: string;
    location: string;
    details: {
        position: string;
        startDate: string;
        endDate: string;
        description: string;
    }[];
    techStack: string[];
}