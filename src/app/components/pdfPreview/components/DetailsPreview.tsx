import { CvContext } from "@/app/context/context";
import { useContext } from "react";

export default function DetailsPreview() {
    const { details } = useContext(CvContext);
    return (
        <div>
            <div>{details.name}</div>
            <div>{details.objective}</div>
            <div>{details.email}</div>
            <div>{details.phone}</div>
            <div>{details.website}</div>
            <div>{details.location}</div>
        </div>
    );
}
