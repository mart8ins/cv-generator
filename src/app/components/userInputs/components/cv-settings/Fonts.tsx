import { LocalStorageActions } from "@/app/context/localStorage";
import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";

export default function Fonts() {
    const { theme, setTheme, offeredFontFamily } = useContext(AppThemeContext);

    function handeFontFamily(fontFamily: any) {
        setTheme({
            ...theme,
            fontFamily: {
                font: fontFamily.font,
                name: fontFamily.name
            }
        });
        LocalStorageActions.setItem("cv-theme", {
            ...theme,
            fontFamily: {
                font: fontFamily.font,
                name: fontFamily.name
            }
        })
    }

    return (
        <div className="settings-container offered-fontFamily-container">
            <div className="offered-fontFamily-title">Choose fonts</div>
            <div className="offered-fontFamily">
                {offeredFontFamily.map((fontFamily: any) => {
                    return <div
                        onClick={() => {
                            handeFontFamily(fontFamily)
                        }}
                        title={fontFamily.name} key={fontFamily.name}
                        className={`offered-fontFamily-setting ${fontFamily.font.className}`}
                        style={fontFamily.name == theme.fontFamily.name ? { color: "white", backgroundColor: theme.color, borderColor: theme.color }: {}}
                        >
                        {fontFamily.name}
                    </div>
                })}
            </div>
        </div>)
}