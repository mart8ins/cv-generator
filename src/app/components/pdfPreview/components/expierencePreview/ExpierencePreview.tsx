import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";
import ExpierenceBlock from "./ExpierenceBlock";

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
                            <ExpierenceBlock key={element.id} workExperience={element}/>
                        );
                    })}
            </div>
            <ExpierenceBlock workExperience={workExperience}/>
        </div>
    );
}
