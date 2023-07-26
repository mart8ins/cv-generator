
import { CvContext } from "@/app/context/context";
import { useContext } from "react";

export default function DetailsInput(){
    const {details, setDetails} = useContext(CvContext);
    
    return (
        <div>
            <div>
                <h4>Name</h4>
                <input type="text" onChange={(e)=> setDetails({
                ...details,
                name: e.target.value
            })}/>
            </div>
            <div>
                <h4>Objective</h4>
                <input type="text" onChange={(e)=> setDetails({
                ...details,
                objective: e.target.value
            })}/>
            </div>

            <div>
                <h4>Email</h4>
                <input type="text" onChange={(e)=> setDetails({
                ...details,
                email: e.target.value
            })}/>
            </div>

            <div>
                <h4>Phone</h4>
                <input type="text" onChange={(e)=> setDetails({
                ...details,
                phone: e.target.value
            })}/>
            </div>

            <div>
                <h4>Website</h4>
                <input type="text" onChange={(e)=> setDetails({
                ...details,
                website: e.target.value
            })}/>
            </div>

            <div>
                <h4>Location</h4>
                <input type="text" onChange={(e)=> setDetails({
                ...details,
                location: e.target.value
            })}/>
            </div> 
        </div>
    )
}