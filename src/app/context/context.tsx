import { createContext, useState } from "react";

export const CvContext = createContext({} as any);

const CvContextProvider = ({ children }: any) => {
    
    const [details, setDetails] = useState({
        name: "Martins Meisters",
        objective: "Software enginer",
        email: "mart8ins@gmail.com",
        phone: "29141645",
        website: "www.musite.lv",
        location: "Riga",
    });

    const [workExperienceAll, setWorkExperienceAll] = useState({
        title: "WORK EXPIERENCE",
        data: [
            {
                id: "1",
                company: "Codelex",
                job_title: "Programmer",
                date: "2023 - present",
                description: "Im coding!!!",
            },
        ],
    });
    const [workExperience, setWorkExperience] = useState({
        id: "",
        company: "",
        job_title: "",
        date: "",
        description: "",
    });

    const [educationAll, setEducationAll] = useState({
        title: "EDUCATION",
        data: [
            {
                id: "1",
                school: "University of Latvia",
                date: "2016",
                degree: "Bachlerors degree",
                additional: "I was a good student.",
            },
        ],
    });
    const [education, setEducation] = useState({
        id: "",
        school: "",
        date: "",
        degree: "",
        additional: "",
    });

    const [projectsAll, setProjectsAll] = useState({
        title: "PROJECTS",
        data: [
            {
                id: "1",
                name: "Flight planner",
                date: "2016",
                description: "Codelex project",
                link: "https://github.com/mart8ins/flight-planner",
            },
        ],
    });
    const [project, setProject] = useState({
        id: "",
        name: "",
        date: "",
        description: "",
        link: "",
    });

    const [skillsAll, setSkillsAll] = useState({
        title: "SKILLS",
        data: [{
            id: "1",
            name: "Code",
            rate: 5
        }],
    });

    const [skill, setSkill] = useState({
        id: "",
        name: "",
        rate: null,
    });

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
                skill,
                setSkill
            }}>
            {children}
        </CvContext.Provider>
    );
};

export default CvContextProvider;
