import { AppThemeContext } from "@/app/context/theme-context";
import SettingsIcon from "@mui/icons-material/Settings";
import { TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";

export default function SettingsInput() {
    const [ customColor, setCustomColor] = useState("");
    const [ customFontSize, setCustomFontSize] = useState("");
    const { theme, setTheme, defaultColor, defaultSize } = useContext(AppThemeContext);

    useEffect(()=> {
        if(CSS.supports("color", customColor)) {
            setTheme({
                ...theme,
                color: customColor
            })
        } 
    }, [customColor])

    useEffect(()=> {
        if(customFontSize.length > 0) {
            setTheme({
                ...theme,
                size: customFontSize + "pt"
            })
        } else {
            setTheme({
                ...theme,
                size: defaultSize
            })
        }
    }, [customFontSize])

    return (
        <div className="details-input-group">
            <div className="settings-title-container">
                <SettingsIcon /> <div>Settings</div>
            </div>
            <div className="settings-container">
                <TextField onChange={(e)=> setCustomColor(e.target.value)} value={customColor} style={{ width: "70%" }} id="standard-basic" label="Custom color (any valid CSS color name)" variant="standard" />
            </div>

            <div className="settings-container">
                <TextField onChange={(e)=> setCustomFontSize(e.target.value)} value={customFontSize} style={{ width: "70%" }} id="standard-basic" label="Custom font size (pt)" variant="standard" />
            </div>
        </div>
    );
}
