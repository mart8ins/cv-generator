import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";
import ProjectBlock from "../../shared/ProjectBlock";

export default function ProjectsPreview() {
    const { project, projectsAll } = useContext(CvContext);
    const { theme } = useContext(AppThemeContext);
    return (
        <div>
            {(projectsAll.data.length > 0 ||
                project.school.length > 0 ||
                project.degree.length > 0 ||
                project.date.length > 0 ||
                project.additional.length > 0) && (
                <div className="section-title">
                    <div
                        className="section-identifier"
                        style={{ width: theme.size, height: theme.size, backgroundColor: theme.color }}></div>
                    <div className="section-identifier-title">{projectsAll.title}</div>
                </div>
            )}

            <div>
                {projectsAll.data.length > 0 &&
                    projectsAll.data.map((element: any) => {
                        return <ProjectBlock key={element.id} project={element}/>;
                    })}
            </div>
            <ProjectBlock project={project}/>
        </div>
    );
}
