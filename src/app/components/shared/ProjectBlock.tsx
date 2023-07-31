import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";

export default function ProjectBlock({ project, inputView }: {project: ProjectsType, inputView: boolean}) {
    const { theme, defaultSize } = useContext(AppThemeContext);
    return (
        <div className="section-block" style={inputView ? { fontSize: defaultSize } : { fontSize: theme.size }}>
            <div className="section-company">{project.name}</div>
            <div className="section-group">
                <div>{project.link}</div>
                <div>{project.date}</div>
            </div>
            <div className="section-description">
                <div>{project.description}</div>
            </div>
        </div>
    );
}
