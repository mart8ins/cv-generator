import { createContext, useState } from "react";

export const AppThemeContext = createContext({} as any);

const AppThemeContextProvider = ({ children }: any) => {
    const [theme, setTheme] = useState({
        color: "green",
        size: "10pt",
        iconSize: "small"
    })
    return (
        <AppThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </AppThemeContext.Provider>
    );
};

export default AppThemeContextProvider;