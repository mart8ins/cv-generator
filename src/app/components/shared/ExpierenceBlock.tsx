import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";

export default function ExpierenceBlock({workExperience}: {workExperience: WorkExpierenceType}){
    const { theme } = useContext(AppThemeContext);
    return (
        <div className="section-block" style={{ fontSize: theme.size }}>
                <div className="section-company">{workExperience.company}</div>
                <div className="section-group">
                    <div>{workExperience.job_title}</div>
                    <div>{workExperience.date}</div>
                </div>
                <div className="section-description">
                    {workExperience.description}
                </div>
            </div>
    )
}