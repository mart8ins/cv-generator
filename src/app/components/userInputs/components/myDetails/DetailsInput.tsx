import { CvContext } from "@/app/context/context";
import { LocalStorageActions } from "@/app/context/localStorage";
import { TextField } from "@mui/material";
import { useContext } from "react";

export default function DetailsInput() {
    const { details, setDetails } = useContext(CvContext);

    return (
        <div>
            <div className="details-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                       {
                        setDetails({
                            ...details,
                            name: e.target.value,
                        })

                        LocalStorageActions.setItem("details", {
                            ...details,
                            name: e.target.value
                        })
                       }
                    }
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={details.name}
                />
            </div>
            <div className="details-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        {
                            setDetails({
                                ...details,
                                objective: e.target.value,
                            })
    
                            LocalStorageActions.setItem("details", {
                                ...details,
                                objective: e.target.value
                            })
                           }
                    }
                    id="outlined-basic"
                    label="Objective"
                    variant="outlined"
                    value={details.objective}
                />
            </div>

            <div className="details-fields-one-line details-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        {
                            setDetails({
                                ...details,
                                email: e.target.value,
                            })
    
                            LocalStorageActions.setItem("details", {
                                ...details,
                                email: e.target.value
                            })
                           }
                    }
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={details.email}
                />
                <div className="details-input-group-right-item">
                    <TextField
                        onChange={(e) =>
                            {
                                setDetails({
                                    ...details,
                                    phone: e.target.value,
                                })
        
                                LocalStorageActions.setItem("details", {
                                    ...details,
                                    phone: e.target.value
                                })
                               }
                        }
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        value={details.phone}
                    />
                </div>
            </div>

            <div className="details-fields-one-line details-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        {
                            setDetails({
                                ...details,
                                website: e.target.value,
                            })
    
                            LocalStorageActions.setItem("details", {
                                ...details,
                                website: e.target.value
                            })
                           }
                    }
                    id="outlined-basic"
                    label="Website"
                    variant="outlined"
                    value={details.website}
                />
                <div className="details-input-group-right-item">
                    <TextField
                        onChange={(e) =>
                            {
                                setDetails({
                                    ...details,
                                    location: e.target.value,
                                })
        
                                LocalStorageActions.setItem("details", {
                                    ...details,
                                    location: e.target.value
                                })
                               }
                        }
                        id="outlined-basic"
                        label="Location"
                        variant="outlined"
                        value={details.location}
                    />
                </div>
            </div>
        </div>
    );
}
