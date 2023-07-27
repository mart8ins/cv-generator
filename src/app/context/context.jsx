import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CvContext = createContext();

const CvContextProvider = ({ children }) => {
    const [details, setDetails] = useState({
        name: "",
        objective: "",
        email: "",
        phone: "",
        website: "",
        location: ""
    });

    const [workExperienceAll, setWorkExperienceAll] = useState({
        title: "Work Expierence",
        data: []
    });
    const [workExperience, setWorkExperience] = useState({
        id: uuidv4(),
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