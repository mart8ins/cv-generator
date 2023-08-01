import { CvContext } from "@/app/context/context";
import { useContext } from "react";
import { Typography, Rating } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { LocalStorageActions } from "@/app/context/localStorage";

export default function SkillsPreviewBlock() {
    const { skillsAll, setSkillsAll } = useContext(CvContext);

    function deleteSkill(id: String){
        const remaining = skillsAll.data.filter((w:SkillType)=> {
            if(id != w.id) {
                return w;
            }
        })
        setSkillsAll({
            ...skillsAll,
            data: remaining
        });

        LocalStorageActions.setItem("skillsAll", {
            ...skillsAll,
            data: remaining
        });
    }
    return (
        <div className="skills-input-preview-block">
            {skillsAll.data.length > 0 &&
                skillsAll.data.map((element: SkillType) => {
                    return (
                        <div key={element.id} className="skills-input-preview-element">
                            <div className="skills-input-preview">
                                <div className="skills-input-preview-rating">
                                    <Rating name="read-only" value={element.rate} readOnly />
                                </div>
                                <Typography component="legend">{element.name}</Typography>
                            </div>
                            <div className="skills-input-preview-delete">
                                <div onClick={()=> deleteSkill(element.id)}>
                                    <DeleteForeverIcon />
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
