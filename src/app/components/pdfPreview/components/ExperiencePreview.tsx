import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";
import ExperienceBlock from "../../shared/ExperienceBlock";

export default function ExperiencePreview() {
    const { workExperience, workExperienceAll } = useContext(CvContext);
    const { theme } = useContext(AppThemeContext);
    return (
        <div>
            {(workExperienceAll.data.length > 0 ||
                workExperience.company.length > 0 ||
                workExperience.job_title.length > 0 ||
                workExperience.date.length > 0 ||
                workExperience.description.length > 0) && (
                <div className="section-title">
                    <div
                        className="section-identifier"
                        style={{ width: theme.size, height: theme.size, backgroundColor: theme.color }}></div>
                    <div className="section-identifier-title" style={{ fontSize: theme.size }}>
                        {workExperienceAll.title}
                    </div>
                </div>
            )}

            <div>
                {workExperienceAll.data.length > 0 &&
                    workExperienceAll.data.map((element: WorkExperienceType) => {
                        return <ExperienceBlock inputView={false} key={element.id} workExperience={element} />;
                    })}
            </div>
            <ExperienceBlock inputView={false} workExperience={workExperience} />
        </div>
    );
}
