import { ReactNode, createContext, useEffect, useState } from "react";
import { LocalStorageActions } from "./localStorage";

export const AppThemeContext = createContext({} as any);

const AppThemeContextProvider = ({ children }: {children: ReactNode}) => {
    const [pdfScale, setPdfScale] = useState(0.9);
    const [defaultColor] = useState("#3B292FFF");
    const [defaultSize] = useState("10pt");

    const [theme, setTheme] = useState({
        color: defaultColor,
        size: defaultSize
    });

    useEffect(()=> {
        const dataFromLS = LocalStorageActions.getItem("cv-theme");
        if(dataFromLS) {
            setTheme(dataFromLS);
        }
    }, []);

    return (
        <AppThemeContext.Provider value={{ theme, setTheme, defaultColor, defaultSize, pdfScale, setPdfScale }}>
            {children}
        </AppThemeContext.Provider>
    );
};

export default AppThemeContextProvider;
