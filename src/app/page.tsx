"use client";
import UserInputs from "./components/userInputs/UserInputs";
import PdfPreview from "./components/pdfPreview/PdfPreview";
import CvContextProvider from "./context/context";

export default function Home() {
    return (
        <div className="container">
            <CvContextProvider>
                <UserInputs />
                <PdfPreview />
            </CvContextProvider>
        </div>
    );
}
