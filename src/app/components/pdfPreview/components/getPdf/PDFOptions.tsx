import { AppThemeContext } from "@/app/context/theme-context";
import { Slider } from "@mui/material";
import dynamic from "next/dynamic";
import { useContext } from "react";
const GeneratePDF = dynamic(() => import("./GeneratePDF"), { ssr: false });

export default function PDFoptions({ pdfRef }: any) {
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
            <GeneratePDF html={pdfRef} />
        </div>
    );
}
