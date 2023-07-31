import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";

export default function ExpierenceBlock({workExperience, inputView}: {workExperience: WorkExpierenceType, inputView: boolean}){
    const { theme, defaultSize } = useContext(AppThemeContext);
    return (
        <div className="section-block" style={inputView ? { fontSize: defaultSize } : { fontSize: theme.size }}>
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