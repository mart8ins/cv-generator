import { useContext } from "react";
import DetailsPreview from "./components/DetailsPreview";
import { AppThemeContext } from "@/app/context/theme-context";

export default function PdfPreview() {
    const {theme} = useContext(AppThemeContext)
    const scale = 0.6;
    return (
        <div className="pdfPreview">
            <div className="pdf-document" style={{borderTopColor: theme.color, width: "793.33px", 
                height: "1122.67px", transform: `scale(${scale})`}}>
                <div className="preview-group">
                <DetailsPreview />
                </div>
            </div>
        </div>
    );
}
