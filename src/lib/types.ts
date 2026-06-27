export type ProjectLinkType = "appstore" | "playstore" | "figma" | "website";

export interface ProjectLink {
    type: ProjectLinkType;
    url: string;
}

export interface Project {
    index?: number;
    title: string;
    description: string;
    disclaimer?: string;
    content: string;
    imgSrc: string;
    link: string;
    tags: string[];
    github?: string;
    otherLinks?: ProjectLink[];
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