type DetailsType = {
    name: string;
    objective: string;
    email: string;
    phone: string;
    website: string;
    location: string;
};

type WorkExperienceType = {
    id: string;
    company: string;
    job_title: string;
    date: string;
    description: string;
};

type WorkExperienceAllType = {
    title: string;
    data: WorkExperienceType[];
};

type EducationType = {
    id: string;
    school: string;
    date: string;
    degree: string;
    additional: string;
};

type EducationAllType = {
    title: string;
    data: EducationType[];
};

type ProjectsType = {
    id: string;
    name: string;
    date: string;
    description: string;
    link: string;
};

type ProjectsAllType = {
    title: string;
    data: ProjectsType[];
};

type SkillType = {
    id: string;
    name: string;
    rate: number;
};
type SkillsAllType = {
    title: string;
    data: SkillType[];
};

type CustomType = {
    title: string,
    text: string,
    bulletpoints: boolean
}

type AppContextData = {
    details: DetailsType;
    setDetails: (arg: DetailsType) => void;
    workExperience: WorkExperienceType;
    setWorkExperience: (arg: WorkExperienceType) => void;
    workExperienceAll: {
        title: string;
        data: WorkExperienceType[];
    };
    setWorkExperienceAll: any;
    education: EducationType;
    setEducation: (arg: EducationType) => void;
    educationAll: {
        title: string;
        data: EducationType[];
    };
    setEducationAll: any;
    project: ProjectsType;
    setProject: (arg: ProjectsType) => void;
    projectsAll: {
        title: string;
        data: ProjectsType[];
    };
    setProjectsAll: any;
    skillsAll: {
        title: string;
        data: SkillType[];
    };
    setSkillsAll: any;
    custom: CustomType,
    setCustom: any
};

type Theme = {
    color: string;
    size: string;
    iconSize: string;
};

type ThemeContextData = {
    pdfScale: number;
    setPdfScale: (arg: number) => void;
    defaultColor: string;
    defaultSize: string;
    theme: Theme;
    setTheme: (arg: Theme) => void;
};
