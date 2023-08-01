import { ReactNode, createContext, useState, useEffect } from "react";
import { LocalStorageActions } from "./localStorage";

export const CvContext = createContext({} as AppContextData);

const CvContextProvider = ({ children }: { children: ReactNode }) => {
    
    const [details, setDetails] = useState({
        name: "",
        objective: "",
        email: "",
        phone: "",
        website: "",
        location: "",
    });


    useEffect(() => {
        const detailsFromLS: any = LocalStorageActions.getItem("details");
        if (detailsFromLS) {
            setDetails(detailsFromLS);
        }
    }, []);

    const [workExperience, setWorkExperience] = useState({
        id: "",
        company: "",
        job_title: "",
        date: "",
        description: "",
    });

    const [workExperienceAll, setWorkExperienceAll] = useState({
        title: "WORK EXPERIENCE",
        data: [],
    });

    useEffect(() => {
        const detailsFromLS = LocalStorageActions.getItem("workExperienceAll");
        if (detailsFromLS) {
            setWorkExperienceAll(detailsFromLS);
        }
    }, []);

    const [education, setEducation] = useState({
        id: "",
        school: "",
        date: "",
        degree: "",
        additional: "",
    });

    const [educationAll, setEducationAll] = useState({
        title: "EDUCATION",
        data: [],
    });

    useEffect(() => {
        const detailsFromLS = LocalStorageActions.getItem("educationAll");
        if (detailsFromLS) {
            setEducationAll(detailsFromLS);
        }
    }, []);

    const [project, setProject] = useState({
        id: "",
        name: "",
        date: "",
        description: "",
        link: "",
    });

    const [projectsAll, setProjectsAll] = useState({
        title: "PROJECTS",
        data: [],
    });

    useEffect(() => {
        const detailsFromLS = LocalStorageActions.getItem("projectsAll");
        if (detailsFromLS) {
            setProjectsAll(detailsFromLS);
        }
    }, []);

    const [skillsAll, setSkillsAll] = useState({
        title: "TOP SKILLS",
        data: [
            {
            id: "top-skill-1",
            name: "",
            rate: 1
        },
        {
            id: "top-skill-2",
            name: "",
            rate: 1
        },
        {
            id: "top-skill-3",
            name: "",
            rate: 1
        },
        {
            id: "top-skill-4",
            name: "",
            rate: 1
        },
        {
            id: "top-skill-5",
            name: "",
            rate: 1
        }
    ],
    });

    useEffect(() => {
        const detailsFromLS = LocalStorageActions.getItem("skillsAll");
        if (detailsFromLS) {
            setSkillsAll(detailsFromLS);
        }
    }, []);

    return (
        <CvContext.Provider
            value={{
                details,
                setDetails,
                workExperience,
                setWorkExperience,
                workExperienceAll,
                setWorkExperienceAll,
                education,
                setEducation,
                educationAll,
                setEducationAll,
                project,
                setProject,
                projectsAll,
                setProjectsAll,
                skillsAll,
                setSkillsAll,
            }}>
            {children}
        </CvContext.Provider>
    );
};

export default CvContextProvider;
