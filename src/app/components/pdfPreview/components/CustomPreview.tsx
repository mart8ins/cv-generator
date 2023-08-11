import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { useContext, useEffect, useState } from "react";

export default function CustomPreview() {
    const { custom } = useContext(CvContext);
    const { theme } = useContext(AppThemeContext);

    const [splitedText, setSplitedText] = useState<string[]>([]);

    useEffect(() => {
        if(custom.text.length > 0) {
            const splited = custom.text.split("\n");
            setSplitedText(splited)
        }
    }, [custom.text])

    return (
        <div>
            {custom.title.length > 0 && (
                <div className="section-title">
                    <div
                        className="section-identifier"
                        style={{ width: theme.size, height: theme.size, backgroundColor: theme.color }}></div>
                    <div className="section-identifier-title" style={{ fontSize: theme.size }}>{custom.title}</div>
                </div>
            )}

            <div className="custom-preview-container">
                {splitedText.map((text: string, i) => {
                    return <div key={i} style={{ fontSize: theme.size }}>{text.length > 1 && text}</div>
                })}
            </div>
        </div>
    );
}
