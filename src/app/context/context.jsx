import { createContext, useState } from "react";

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
   
    return (
        <CvContext.Provider value={{details, setDetails}}>
            {children}
        </CvContext.Provider>
    );
};

export default CvContextProvider;