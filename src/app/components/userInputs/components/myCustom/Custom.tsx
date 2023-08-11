import { CvContext } from "@/app/context/context";
import { useContext, useEffect } from "react";
import { TextField, Tooltip } from "@mui/material";
import EngineeringIcon from '@mui/icons-material/Engineering';
import ListIcon from "@mui/icons-material/List";
import { LocalStorageActions } from "@/app/context/localStorage";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

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
    };

    const toogleBulletPoints = () => {
        setCustom({
            ...custom,
            bulletpoints: !custom.bulletpoints
        })
        LocalStorageActions.setItem("custom", {
            ...custom,
            bulletpoints: !custom.bulletpoints
        })
    };

    const handleBulletPointsForText = (text: string) => {
        const lines = text.split('\n');
        let formattedText;
        if (custom.bulletpoints) {
            formattedText = lines.map((line: string) => {
                if (line[0] != "•" && line.length > 0) {
                    return `• ${line}`;
                } else {
                    return line;
                }
            });
        } else {
            formattedText = lines.map((line: string) => {
                if (line[0] == "•" && line.length > 0) {
                    return `${line.slice(2)}`;
                } else {
                    return `${line}`;
                }
            });
        }

        return formattedText.join('\n');
    };


    function handleText(e: any) {
        let formated = handleBulletPointsForText(e.target.value)
        setCustom({
            ...custom,
            text: formated
        })

        LocalStorageActions.setItem("custom", {
            ...custom,
            text: formated
        })
    }

    useEffect(() => {
        let formated = handleBulletPointsForText(custom.text);
        if (formated.length > 0) {
            setCustom({
                ...custom,
                text: formated
            })
            LocalStorageActions.setItem("custom", {
                ...custom,
                text: formated
            })
        }
    }, [custom.bulletpoints])

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
                            onChange={(e) => handleTitle(e)}
                            value={custom.title}
                            placeholder="Your custom title"
                        />
                    </div>
                    <div className="section-title-options">
                        <ListIcon color="disabled" />
                    </div>
                </div>

                <div className="section-custom-text-countainer">
                    <div className="section-custom-title">Custom text box
                        <span onClick={toogleBulletPoints} className="custom-bulletpoint-checker-container">
                            {custom.bulletpoints ?
                                <Tooltip title="Disable bulletpoints">
                                    <RadioButtonCheckedIcon />
                                </Tooltip>
                                :
                                <Tooltip title="Enable bulletpoints">
                                    <RadioButtonUncheckedIcon />
                                </Tooltip>}
                        </span>
                    </div>
                    <div className="section-custom-textfield">
                        <TextField
                            fullWidth
                            multiline
                            id="outlined-basic"
                            label="Text"
                            variant="outlined"
                            onChange={(e) => handleText(e)}
                            value={custom.text}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
