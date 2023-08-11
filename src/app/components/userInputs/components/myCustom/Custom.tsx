import { CvContext } from "@/app/context/context";
import { useContext } from "react";
import { TextField } from "@mui/material";
import EngineeringIcon from '@mui/icons-material/Engineering';
import ListIcon from "@mui/icons-material/List";
import { LocalStorageActions } from "@/app/context/localStorage";

export default function Custom() {
    const { custom, setCustom } = useContext(CvContext);

    function handleTitle(e: any) {
        const title = e.target.value.toUpperCase();
        setCustom({
            ...custom,
            title
        })
        LocalStorageActions.setItem("custom", {
            ...custom,
            title
        })
    }

    function handleText(e: any) {
        setCustom({
            ...custom,
            text: e.target.value
        })

        LocalStorageActions.setItem("custom", {
            ...custom,
            text: e.target.value
        })
    }

    const formatedText = (text: string) => {
        const lines = text.split('\n');
        const textWithBulletPoints = lines.map((line: string) => {
            if(line[0] != "•" && line.length > 0) {
                return `• ${line}`;
            } else {
                return line;
            }
            
        });
        return textWithBulletPoints.join('\n');
    };

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
                            onChange={(e)=> handleTitle(e)}
                            value={custom.title}
                            placeholder="Your custom title"
                        />
                    </div>
                    <div className="section-title-options">
                        <ListIcon color="disabled" />
                    </div>
                </div>

                <div className="section-custom-text-countainer">
                    <div className="section-custom-title">Custom text box</div>
                    <div className="section-custom-textfield">
                        <TextField
                            fullWidth
                            multiline
                            id="outlined-basic"
                            label="Text"
                            variant="outlined"
                            onChange={(e) => handleText(e)}
                            value={formatedText(custom.text)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
