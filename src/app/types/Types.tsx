type DetailsType = {
    name: string;
    objective: string;
    email: string;
    phone: string;
    website: string;
    location: string;
};

type WorkExpierenceType = {
    id: string;
    company: string;
    job_title: string;
    date: string;
    description: string;
};

type WorkExpierenceAllType = {
    title: string;
    data: WorkExpierenceType[];
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
    data: ProjectsType[]
};

type SkillType = {
    id: string;
    name: string;
    rate: number;
};
type SkillsAllType = {
    title: string;
    data: SkillType[]
};

type AppContextData = {
    details: DetailsType;
    setDetails: (arg: DetailsType) => void;
    workExperience: WorkExpierenceType;
    setWorkExperience: (arg: WorkExpierenceType) => void;
    workExperienceAll: {
        title: string;
        data: WorkExpierenceType[];
    };
    setWorkExperienceAll: (arg: WorkExpierenceAllType) => void;

    education: EducationType;
    setEducation: (arg: EducationType) => void;
    educationAll: {
        title: string;
        data: EducationType[];
    };
    setEducationAll: (arg: EducationAllType) => void;

    project: ProjectsType;
    setProject: (arg: ProjectsType) => void;
    projectsAll: {
        title: string;
        data: ProjectsType[];
    };
    setProjectsAll: (arg: ProjectsAllType) => void;

    skill: SkillType;
    setSkill: (arg: SkillType)=> void;
    skillsAll: {
        title: string;
        data: SkillType[];
    };
    setSkillsAll: (arg: SkillsAllType) => void;
};

type Theme = {
    color: string,
    size: string,
    iconSize: string
}

type ThemeContextData = {
    pdfScale: number,
    setPdfScale: (arg: number) => void;
    defaultColor: string,
    defaultSize: string,
    defaultIconSize: string,
    theme: Theme,
    setTheme: (arg: Theme) => void;
}