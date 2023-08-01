import { ReactNode, createContext, useEffect, useState } from "react";
import { LocalStorageActions } from "./localStorage";

import { Roboto, Montserrat, Lato, Caladea, Raleway } from 'next/font/google'
const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
})
const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin'],
})
const lato = Lato({
    weight: ['400', '700'],
    subsets: ['latin'],
})
const caladea = Caladea({
    weight: ['400', '700'],
    subsets: ['latin'],
})
const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export const AppThemeContext = createContext({} as any);

const AppThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [offeredColors] = useState([
        "#E08080", "#A42323", "#A3C625", "#33E547", "#33D9E5", "#335EE5", "#E033E5", "#7BAC59", "#3D6720", "#14D693"
    ]);
    const [offeredSizes] = useState([
        "9", "10", "11"
    ]);

    const [offeredFontFamily] = useState([
        {name: "Roboto", font: roboto},
        { name: "Montserrat", font: montserrat },
        { name: "Lato", font: lato },
        { name: "Caladea", font: caladea },
        { name: "Raleway", font: raleway }
    ]);

    const [pdfScale, setPdfScale] = useState(0.9);
    const [defaultColor] = useState("#3B292FFF");
    const [defaultSize] = useState("9pt");
    const [defaultFontFamily] = useState(montserrat);

    const [theme, setTheme] = useState({
        color: defaultColor,
        size: defaultSize,
        fontFamily: {
            font: defaultFontFamily,
            name: "Montserrat"
        }
    });

    useEffect(() => {
        const dataFromLS = LocalStorageActions.getItem("cv-theme");
        if (dataFromLS) {
            setTheme(dataFromLS);
        }
    }, []);

    return (
        <AppThemeContext.Provider value={{ theme, setTheme, defaultColor, defaultSize, pdfScale, setPdfScale, offeredColors, offeredSizes, offeredFontFamily }}>
            {children}
        </AppThemeContext.Provider>
    );
};

export default AppThemeContextProvider;
