import { CvContext } from "@/app/context/context";
import { AppThemeContext } from "@/app/context/theme-context";
import { useContext } from "react";

export default function DetailsPreview() {
    const { details } = useContext(CvContext);
    const {theme} = useContext(AppThemeContext);
    return (
        <div>
            <div className="details-name" style={{color: theme.color}}>{details.name}</div>
            <div>{details.objective}</div>
            <div>{details.email}</div>
            <div>{details.phone}</div>
            <div>{details.website}</div>
            <div>{details.location}</div>
        </div>
    );
}
