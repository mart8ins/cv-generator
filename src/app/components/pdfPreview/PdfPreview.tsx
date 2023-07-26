
import { CvContext } from "@/app/context/context";
import { useContext } from "react";

export default function PdfPreview() {
    const {details} = useContext(CvContext);
    return <div className="pdfPreview">
        <div>
        {details.name}
        </div>
        <div>
        {details.objective}
        </div>
        <div>
        {details.email}
        </div>
        <div>
        {details.phone}
        </div>
        <div>
        {details.website}
        </div>
        <div>
        {details.location}
        </div>
    </div>;
}
