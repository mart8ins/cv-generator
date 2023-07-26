import { useContext } from "react";
import DetailsPreview from "./components/DetailsPreview";
import { AppThemeContext } from "@/app/context/theme-context";

export default function PdfPreview() {
    const {theme} = useContext(AppThemeContext)
    return (
        <div className="pdfPreview">
            <div className="pdf-container" style={{borderTopColor: theme.color}}>
                <DetailsPreview />
            </div>
        </div>
    );
}
