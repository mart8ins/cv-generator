import { CvContext } from "@/app/context/context";
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
                        setDetails({
                            ...details,
                            name: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                />
            </div>
            <div className="details-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        setDetails({
                            ...details,
                            objective: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Objective"
                    variant="outlined"
                />
            </div>

            <div className="details-fields-one-line details-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        setDetails({
                            ...details,
                            email: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />
                <div className="details-input-group-right-item">
                    <TextField
                        onChange={(e) =>
                            setDetails({
                                ...details,
                                phone: e.target.value,
                            })
                        }
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                    />
                </div>
            </div>

            <div className="details-fields-one-line details-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        setDetails({
                            ...details,
                            website: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Website"
                    variant="outlined"
                />
                <div className="details-input-group-right-item">
                    <TextField
                        onChange={(e) =>
                            setDetails({
                                ...details,
                                location: e.target.value,
                            })
                        }
                        id="outlined-basic"
                        label="Location"
                        variant="outlined"
                    />
                </div>
            </div>
        </div>
    );
}
