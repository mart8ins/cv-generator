import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { Typography, Rating } from "@mui/material";
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
                    <div className="section-identifier-title" style={{fontSize: theme.size}}>{skillsAll.title}</div>
                </div>
            )}

            <div className="skills-preview-container">
                {skillsAll.data.length > 0 &&
                    skillsAll.data.map((element: any) => {
                        return (
                            <div key={element.id} className="skills-preview-element">
                                <Rating size="small" style={{ color: theme.color }} name="read-only" value={element.rate} readOnly />
                                <Typography style={{ fontSize: theme.size }} component="legend">{element.name}</Typography>
                            </div>
                        );
                    })}

                {(skill.name.length > 0 || skill.rate != null) && (
                    <div className="skills-preview-element">
                        <Rating size="small" style={{ color: theme.color }} name="read-only" value={skill.rate} readOnly />
                        <Typography style={{ fontSize: theme.size }}  component="legend">{skill.name}</Typography>
                    </div>
                )}
            </div>
        </div>
    );
}
