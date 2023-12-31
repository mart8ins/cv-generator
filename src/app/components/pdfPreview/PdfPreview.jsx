import { useContext, useRef } from "react";
import DetailsPreview from "./components/DetailsPreview";
import { AppThemeContext } from "@/app/context/theme-context";
import ExperiencePreview from "./components/ExperiencePreview";
import EducationPreview from "./components/EducationPreview";
import ProjectsPreview from "./components/ProjectsPreview";
import SkillsPreview from "./components/SkillsPreview";
import PDFoptions from "./components/getPdf/PDFOptions";
import CustomPreview from "./components/CustomPreview";

  
export default function PdfPreview() {
    const { theme, pdfScale } = useContext(AppThemeContext);
    const pdfRef = useRef(null);

    return (
        <div className={`pdfPreview ${theme.fontFamily.font.className}`}>
            <PDFoptions pdfRef={pdfRef} />
            <div
                ref={pdfRef}
                className="pdf-document"
                style={{ borderTopColor: theme.color, width: "793.33px", height: "1122.67px", transform: `scale(${pdfScale})` }}>
                <div className="preview-group">
                    <DetailsPreview />
                </div>

                <div className="preview-group">
                    <ExperiencePreview />
                </div>

                <div className="preview-group">
                    <EducationPreview />
                </div>

                <div className="preview-group">
                    <ProjectsPreview />
                </div>

                <div className="preview-group">
                    <CustomPreview />
                </div>

                <div className="preview-group">
                    <SkillsPreview />
                </div>
            </div>
        </div>
    );
}
