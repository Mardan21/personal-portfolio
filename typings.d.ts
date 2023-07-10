interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    jobTitle: string;
    isCurrentlyWorkingHere: boolean;
    points: string[];
    technologies: Technology[];
    dateStarted: string;
    dateEnded: string;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    summary: string;
    image: Image;
    linkToBuild: string;
    technologies: Technology[];
}

export interface Technology extends SanityBody {
    _type: "skill";
    title: string;
    image: Image;
    progress: number;
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    image: Image;
    progress: number;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

