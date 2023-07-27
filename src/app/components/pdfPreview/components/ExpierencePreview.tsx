import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";

export default function ExpierencePreview() {
    const { workExperience, workExperienceAll } = useContext(CvContext);
    const { theme } = useContext(AppThemeContext);
    return (
        <div>
            <div className="section-title">
                <div className="section-identifier" style={{ width: theme.size, height: theme.size, backgroundColor: theme.color }}></div>
                <div className="section-identifier-title">{workExperienceAll.title}</div>
            </div>
            <div>
                {workExperienceAll.data.length > 0 &&
                    workExperienceAll.data.map((element: any) => {
                        console.log(element);
                        return (
                            <div key={element.id} className="expierence-block" style={{ fontSize: theme.size }}>
                                <div className="expierence-company">{element.company}</div>
                                <div className="expierence-group">
                                    <div>{element.job_title}</div>
                                    <div>{element.date}</div>
                                </div>
                                <div className="expierence-description">
                                    {element.description}
                                </div>
                            </div>
                        );
                    })}
            </div>
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
        </div>
    );
}
