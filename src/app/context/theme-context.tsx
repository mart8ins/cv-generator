import { createContext, useState } from "react";

export const AppThemeContext = createContext({} as any);

const AppThemeContextProvider = ({ children }: any) => {
    const [pdfScale, setPdfScale] = useState(0.9);
    const [defaultColor] = useState("#3B292FFF");
    const [defaultSize] = useState("10pt");
    const [defaultIconSize] = useState("small");

    const [theme, setTheme] = useState({
        color: defaultColor,
        size: defaultSize,
        iconSize: defaultIconSize,
    });

    return (
        <AppThemeContext.Provider value={{ theme, setTheme, defaultColor, defaultSize, pdfScale, setPdfScale }}>
            {children}
        </AppThemeContext.Provider>
    );
};

export default AppThemeContextProvider;
