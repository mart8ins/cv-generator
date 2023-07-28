import { useContext, useRef } from "react";
import DetailsPreview from "./components/DetailsPreview";
import { AppThemeContext } from "@/app/context/theme-context";
import ExpierencePreview from "./components/ExpierencePreview";
import EducationPreview from "./components/EducationPreview";
import ProjectsPreview from "./components/ProjectsPreview";
import SkillsPreview from "./components/SkillsPreview";
import PDFoptions from "./components/PdfOptions";
import html2pdf from "html2pdf.js";

export default function PdfPreview() {
    const { theme, pdfScale, setPdfScale } = useContext(AppThemeContext);
    const pdfRef = useRef(null);

    const handleGeneratePDF = () => {
        setPdfScale(0.8);
        const element = pdfRef.current;
        const opt = {
            margin: 10,
            filename: "cv.pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };

        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className="pdfPreview">
            <PDFoptions handleGeneratePDF={handleGeneratePDF} />
            <div
                ref={pdfRef}
                className="pdf-document"
                style={{ borderTopColor: theme.color, width: "793.33px", height: "1122.67px", transform: `scale(${pdfScale})` }}>
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
                    <ProjectsPreview />
                </div>

                <div className="preview-group">
                    <SkillsPreview />
                </div>
            </div>
        </div>
    );
}
