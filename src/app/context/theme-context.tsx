import { createContext, useState } from "react";

export const AppThemeContext = createContext({} as any);

const AppThemeContextProvider = ({ children }: any) => {
    const [defaultColor, setDefaultColor] = useState("#3B292FFF");
    const [defaultSize, setDefaultSize] = useState("10pt");
    const [defaultIconSize, setDefaultIconSize] = useState("small");
    
    const [theme, setTheme] = useState({
        color: defaultColor,
        size: defaultSize,
        iconSize: defaultIconSize
    })

    return (
        <AppThemeContext.Provider value={{theme, setTheme, defaultColor, defaultSize}}>
            {children}
        </AppThemeContext.Provider>
    );
};

export default AppThemeContextProvider;