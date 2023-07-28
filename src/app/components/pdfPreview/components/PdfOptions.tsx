import { AppThemeContext } from "@/app/context/theme-context";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Slider } from "@mui/material";
import { useContext } from "react";

export default function PDFoptions() {
    const { pdfScale, setPdfScale } = useContext(AppThemeContext);
    return (
        <div className="pdf-document-options">
            <div>
                <Slider
                    aria-label="Temperature"
                    defaultValue={pdfScale}
                    valueLabelDisplay="auto"
                    step={0.1}
                    marks
                    min={0.5}
                    max={1.5}
                    onChange={(e: any) => setPdfScale(e.target.value)}
                    value={pdfScale}
                    style={{ color: "white" }}
                />
            </div>
            <div className="pdf-save-container">
                <div>Save</div>
                <PictureAsPdfIcon />
            </div>
        </div>
    );
}
