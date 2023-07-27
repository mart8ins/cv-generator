import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";

export default function ExpierenceBlock({workExperience}: any){
    const { theme } = useContext(AppThemeContext);
    return (
        <div className="expierence-block" style={{ fontSize: theme.size }}>
                <div className="expierence-company">{workExperience.company}</div>
                <div className="expierence-group">
                    <div>{workExperience.job_title}</div>
                    <div>{workExperience.date}</div>
                </div>
                <div className="expierence-description">
                    {workExperience.description}
                </div>
            </div>
    )
}