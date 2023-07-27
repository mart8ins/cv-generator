import { createContext, useState } from "react";


export const CvContext = createContext({} as any);

const CvContextProvider = ({ children }: any) => {
    const [details, setDetails] = useState({
        name: "",
        objective: "",
        email: "",
        phone: "",
        website: "",
        location: ""
    });

    const [workExperienceAll, setWorkExperienceAll] = useState({
        title: "WORK EXPIERENCE",
        data: []
    });
    const [workExperience, setWorkExperience] = useState({
        id: "",
        company: "",
        job_title: "",
        date: "",
        description: ""
    });

    return (
        <CvContext.Provider value={{details, setDetails, workExperience, setWorkExperience,workExperienceAll, setWorkExperienceAll}}>
            {children}
        </CvContext.Provider>
    );
};

export default CvContextProvider;