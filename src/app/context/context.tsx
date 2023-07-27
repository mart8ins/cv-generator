import { createContext, useState } from "react";


export const CvContext = createContext({} as any);

const CvContextProvider = ({ children }: any) => {
    const [details, setDetails] = useState({
        name: "Martins Meisters",
        objective: "Software enginer",
        email: "mart8ins@gmail.com",
        phone: "29141645",
        website: "www.musite.lv",
        location: "Riga"
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