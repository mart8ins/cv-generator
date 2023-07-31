import { AppThemeContext } from "@/app/context/theme-context";
import { Slider } from "@mui/material";
import dynamic from "next/dynamic";
import { useContext } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const GeneratePDF = dynamic(() => import("./GeneratePDF"), { ssr: false });

export default function PDFoptions({pdfRef}: any) {
    const { pdfScale, setPdfScale } = useContext(AppThemeContext);
    return (
        <div className="pdf-document-options">
            <div className="slider-container">
                <RemoveIcon/>
                <Slider
                    aria-label="Scale"
                    defaultValue={pdfScale}
                    valueLabelDisplay="auto"
                    step={0.1}
                    marks
                    min={0.5}
                    max={1.5}
                    onChange={(e: any) => setPdfScale(e.target.value)}
                    value={pdfScale}
                    getAriaLabel={() => 'Temperature range'}
                    size="small"
                    style={{
                        color: "white",
                        backgroundColor: "black"
                    }}
                />
                <AddIcon/>
            </div>
            <div className="generate-container">
                <GeneratePDF html={pdfRef} />
            </div>
        </div>
    );
}
