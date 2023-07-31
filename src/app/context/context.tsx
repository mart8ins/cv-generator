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
        title: "WORK EXPIERENCE",
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

    const [skill, setSkill] = useState({
        id: "",
        name: "",
        rate: 0,
    });

    const [skillsAll, setSkillsAll] = useState({
        title: "SKILLS",
        data: [],
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
                skill,
                setSkill,
                skillsAll,
                setSkillsAll,
            }}>
            {children}
        </CvContext.Provider>
    );
};

export default CvContextProvider;
