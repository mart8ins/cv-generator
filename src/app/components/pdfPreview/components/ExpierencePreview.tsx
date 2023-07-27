import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";

export default function ExpierencePreview() {
    const { workExperience, setWorkExperience, workExperienceAll, setWorkExperienceAll } = useContext(CvContext);
    const { theme } = useContext(AppThemeContext);
    return (
        <div>
            <div className="section-title">
                <div className="section-identifier" style={{ width: theme.size, height: theme.size, backgroundColor: theme.color }}></div>
                {workExperienceAll.title}
            </div>
            <div>
                {workExperienceAll.data.length > 0 &&
                    workExperienceAll.data.map((element: any) => {
                        console.log(element);
                        return (
                            <div key={element.id}>
                                <div>{element.company}</div>
                                <div>{element.job_title}</div>
                                <div>{element.date}</div>
                                <div>{element.description}</div>
                            </div>
                        );
                    })}
            </div>
            <div className="expierence-block">
                <div>{workExperience.company}</div>
                <div>
                    <div>{workExperience.job_title}</div>
                    <div>{workExperience.date}</div>
                </div>
                <div>{workExperience.description}</div>
            </div>
        </div>
    );
}
