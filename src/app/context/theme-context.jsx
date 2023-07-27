import { createContext, useState } from "react";

export const AppThemeContext = createContext();

const AppThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        color: "#665c5b",
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