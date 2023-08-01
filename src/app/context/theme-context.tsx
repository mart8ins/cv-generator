import { ReactNode, createContext, useEffect, useState } from "react";
import { LocalStorageActions } from "./localStorage";

export const AppThemeContext = createContext({} as any);

const AppThemeContextProvider = ({ children }: {children: ReactNode}) => {
    const [offeredColors] = useState([
        "#E08080", "#A42323", "#A3C625", "#33E547", "#33D9E5", "#335EE5", "#E033E5", "#7BAC59", "#3D6720", "#14D693"
    ]);
    const [offeredSizes] = useState([
        "9", "10", "11"
    ]);
    const [pdfScale, setPdfScale] = useState(0.9);
    const [defaultColor] = useState("#3B292FFF");
    const [defaultSize] = useState("9pt");

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
        <AppThemeContext.Provider value={{ theme, setTheme, defaultColor, defaultSize, pdfScale, setPdfScale, offeredColors, offeredSizes }}>
            {children}
        </AppThemeContext.Provider>
    );
};

export default AppThemeContextProvider;
