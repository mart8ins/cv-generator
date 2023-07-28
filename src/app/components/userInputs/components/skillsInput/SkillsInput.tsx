import { CvContext } from "@/app/context/context";
import { useContext } from "react";
import { TextField } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ListIcon from "@mui/icons-material/List";
import SkillsInputBlock from "./SkillsInputBlock";
import SkillsPreviewBlock from "./SkillsPreviewBlock";

export default function SkillsInput() {
    const { skillsAll, setSkillsAll } = useContext(CvContext);

    return (
        <div>
            <div className="section-input-group">
                <div className="section-title-countainer">
                    <div className="section-title-icon">
                        <MilitaryTechIcon />
                    </div>
                    <div className="section-title-input">
                        <TextField
                            onChange={(e) =>
                                setSkillsAll({
                                    ...skillsAll,
                                    title: e.target.value.toUpperCase(),
                                })
                            }
                            id="standard-basic"
                            fullWidth
                            variant="standard"
                            value={skillsAll.title}
                        />
                    </div>
                    <div className="section-title-options">
                        <ListIcon color="disabled" />
                    </div>
                </div>
            </div>
            <div className="section-input-group">
                <SkillsInputBlock />
                <SkillsPreviewBlock />
            </div>
        </div>
    );
}
