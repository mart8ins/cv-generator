import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { Typography, Rating } from "@mui/material";
import { useContext, useEffect, useState } from "react";

export default function SkillsPreview() {
    const { skillsAll } = useContext(CvContext);
    const { theme } = useContext(AppThemeContext);

    const [showTitle, setShowTitle] = useState(false);

    useEffect(()=> {
        if(skillsAll.data[0].name.length > 0 || 
            skillsAll.data[1].name.length > 0 ||
            skillsAll.data[2].name.length > 0 ||
            skillsAll.data[3].name.length > 0 ||
            skillsAll.data[4].name.length > 0
            ) {
                setShowTitle(true)
            } else {
                setShowTitle(false)
            }
    },[skillsAll]);

    return (
        <div>
            {showTitle && (
                <div className="section-title">
                    <div
                        className="section-identifier"
                        style={{ width: theme.size, height: theme.size, backgroundColor: theme.color }}></div>
                    <div className="section-identifier-title" style={{ fontSize: theme.size }}>{skillsAll.title}</div>
                </div>
            )}

            <div className="skills-preview-container">
                {skillsAll.data.length > 0 &&
                    skillsAll.data.map((element: SkillType) => {
                        if (element.name.length > 0) {
                            return (
                                <div key={element.id} className="skills-preview-element">
                                    <Rating size="small" style={{ color: theme.color }} name="read-only" value={element.rate} readOnly />
                                    <Typography style={{ fontSize: theme.size }} component="legend">{element.name}</Typography>
                                </div>
                            );
                        }
                    })}
            </div>
        </div>
    );
}
