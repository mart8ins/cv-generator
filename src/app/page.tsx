"use client";
import UserInputs from "./components/userInputs/UserInputs";
import PdfPreview from "./components/pdfPreview/PdfPreview";
import CvContextProvider from "./context/context";
import AppThemeContextProvider from "./context/theme-context";

export default function Home() {
    return (
         <CvContextProvider>
                <AppThemeContextProvider>
                    <div className="container">
                        <UserInputs />
                        <PdfPreview />
                    </div>
                </AppThemeContextProvider>
            </CvContextProvider>
    );
}
