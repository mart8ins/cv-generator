import { useContext } from "react";
import DetailsPreview from "./components/DetailsPreview";
import { AppThemeContext } from "@/app/context/theme-context";
import ExpierencePreview from "./components/ExpierencePreview";
import EducationPreview from "./components/EducationPreview";
import ProjectsPreview from "./components/ProjectsPreview";

export default function PdfPreview() {
    const { theme } = useContext(AppThemeContext);
    const scale = 0.8;
    return (
        <div className="pdfPreview">
            <div
                className="pdf-document"
                style={{ borderTopColor: theme.color, width: "793.33px", height: "1122.67px", transform: `scale(${scale})` }}>
                <div className="preview-group">
                    <DetailsPreview />
                </div>

                <div className="preview-group">
                    <ExpierencePreview />
                </div>

                <div className="preview-group">
                    <EducationPreview />
                </div>

                <div className="preview-group">
                    <ProjectsPreview/>
                </div>

            </div>
        </div>
    );
}
