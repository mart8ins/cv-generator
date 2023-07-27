import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";

export default function EducationBlock({education}: any){
    const { theme } = useContext(AppThemeContext);
    return (
        <div className="expierence-block" style={{ fontSize: theme.size }}>
                <div className="expierence-company">{education.school}</div>
                <div className="expierence-group">
                    <div>{education.degree}</div>
                    <div>{education.date}</div>
                </div>
                <div className="expierence-description">
                    {education.additional}
                </div>
            </div>
    )
}