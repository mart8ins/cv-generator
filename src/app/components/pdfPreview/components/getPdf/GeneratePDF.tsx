import React, { useContext } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";
import { AppThemeContext } from "@/app/context/theme-context";

export default function GeneratePDF({ html }: any) {
    const { setPdfScale } = useContext(AppThemeContext);

    const generateImage = async () => {
        setPdfScale(0.9);
        const image = await toPng(html.current, { quality: 0.95 });
        const doc = new jsPDF();
        doc.addImage(image, "JPEG", -3, 0, 210, 300);
        doc.save();
    };

    return (
        <div onClick={generateImage} className="pdf-save-container">
            <div>Get</div>
            <PictureAsPdfIcon />
        </div>
    );
}
