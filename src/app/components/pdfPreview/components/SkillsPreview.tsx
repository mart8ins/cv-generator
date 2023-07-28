import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";

export default function SkillsPreview() {
    const { skill, skillsAll } = useContext(CvContext);
    const { theme } = useContext(AppThemeContext);
    return (
        <div>
            {(skillsAll.data.length > 0 || skill.name.length > 0 || skill.rate != null) && (
                <div className="section-title">
                    <div
                        className="section-identifier"
                        style={{ width: theme.size, height: theme.size, backgroundColor: theme.color }}></div>
                    <div className="section-identifier-title">{skillsAll.title}</div>
                </div>
            )}
        </div>
    );
}
