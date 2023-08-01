import { LocalStorageActions } from "@/app/context/localStorage";
import { AppThemeContext } from "@/app/context/theme-context";
import SettingsIcon from "@mui/icons-material/Settings";
import { TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";

export default function SettingsInput() {
    const [customColor, setCustomColor] = useState("");
    const [customFontSize, setCustomFontSize] = useState("");
    const { theme, setTheme, offeredColors } = useContext(AppThemeContext);

    useEffect(() => {
        if (CSS.supports("color", customColor)) {
            setTheme({
                ...theme,
                color: customColor
            })
            LocalStorageActions.setItem("cv-theme", {
                ...theme,
                color: customColor
            })
        }
    }, [customColor])


    useEffect(() => {
        if (customFontSize.length > 0) {
            setTheme({
                ...theme,
                size: customFontSize + "pt"
            })
            LocalStorageActions.setItem("cv-theme", {
                ...theme,
                size: customFontSize + "pt"
            })
        }
    }, [customFontSize])

    return (
        <div className="details-input-group">
            <div className="settings-title-container">
                <SettingsIcon /> <div>Settings</div>
            </div>
            <div className="settings-container">
                <TextField onChange={(e) => setCustomColor(e.target.value)} value={customColor} style={{ width: "60%" }} id="standard-basic" label="Custom color (any valid CSS color name)" variant="standard" />
            </div>

            <div className="settings-container offered-colors-container">
                <div className="offered-colors-title" style={{ color: theme.color }}>Or pick from existing</div>
                <div className="offered-colors">
                    {offeredColors.map((color: string) => {
                        return <div onClick={() => setCustomColor(color)} title={color} key={color} className="offered-color-setting" style={color == theme.color ? { backgroundColor: color, outline: `2px solid black` } : { backgroundColor: color }}>
                        </div>
                    })}
                </div>

            </div>
            <div className="settings-container">
                <TextField onChange={(e) => setCustomFontSize(e.target.value)} value={customFontSize} style={{ width: "60%" }} id="standard-basic" label="Custom font size (pt)" variant="standard" />
            </div>
        </div>
    );
}
