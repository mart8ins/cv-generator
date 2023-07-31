import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";

export default function EducationBlock({education}: {education: EducationType}){
    const { theme } = useContext(AppThemeContext);
    return (
        <div className="section-block" style={{ fontSize: theme.size }}>
                <div className="section-company">{education.school}</div>
                <div className="section-group">
                    <div>{education.degree}</div>
                    <div>{education.date}</div>
                </div>
                <div className="section-description">
                    {education.additional}
                </div>
            </div>
    )
}