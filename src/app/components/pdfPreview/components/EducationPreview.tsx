import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";
import EducationBlock from "../../shared/EducationBlock";

export default function EducationPreview() {
    const { education, educationAll } = useContext(CvContext);
    const { theme } = useContext(AppThemeContext);
    return (
        <div>
            {(educationAll.data.length > 0 ||
                education.school.length > 0 ||
                education.degree.length > 0 ||
                education.date.length > 0 ||
                education.additional.length > 0) && (
                <div className="section-title">
                    <div
                        className="section-identifier"
                        style={{ width: theme.size, height: theme.size, backgroundColor: theme.color }}></div>
                    <div className="section-identifier-title">{educationAll.title}</div>
                </div>
            )}

            <div>
                {educationAll.data.length > 0 &&
                    educationAll.data.map((element: any) => {
                        return <EducationBlock key={element.id} education={element}/>;
                    })}
            </div>
            <EducationBlock education={education}/>
        </div>
    );
}
