"use client";
import UserInputs from "./components/userInputs/UserInputs";
import PdfPreview from "./components/pdfPreview/PdfPreview";
import CvContextProvider from "./context/context";
import AppThemeContextProvider from "./context/theme-context";

export default function Home() {
    return (
        <div className="container">
            <CvContextProvider>
                <AppThemeContextProvider>
                    <UserInputs />
                    <PdfPreview />
                </AppThemeContextProvider>
            </CvContextProvider>
        </div>
    );
}
