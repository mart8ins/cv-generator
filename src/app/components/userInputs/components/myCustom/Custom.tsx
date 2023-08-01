import { CvContext } from "@/app/context/context";
import { useContext, useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import EngineeringIcon from '@mui/icons-material/Engineering';
import ListIcon from "@mui/icons-material/List";
import { LocalStorageActions } from "@/app/context/localStorage";

export default function Custom() {
    const [valid, setValid] = useState(false);
    // const { custom, setCustom, customAll, setCustomAll } = useContext(CvContext);


    return (
        <div>
            <div className="section-input-group">
                <div className="section-title-countainer">
                    <div className="section-title-icon">
                        <EngineeringIcon />
                    </div>
                    <div className="section-title-input">
                        <TextField
                            id="standard-basic"
                            fullWidth
                            variant="standard"
                        />
                    </div>
                    <div className="section-title-options">
                        <ListIcon color="disabled" />
                    </div>
                </div>

                <div>INput box</div>
            </div>
        </div>
    );
}
