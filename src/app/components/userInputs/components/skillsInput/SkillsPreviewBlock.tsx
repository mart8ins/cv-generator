import { CvContext } from "@/app/context/context";
import { useContext } from "react";
import { Typography, Rating } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function SkillsPreviewBlock() {
    const { skillsAll, setSkillsAll } = useContext(CvContext);

    function deleteSkill(id: String){
        const remaining = skillsAll.data.filter((w:any)=> {
            if(id != w.id) {
                return w;
            }
        })
        setSkillsAll({
            ...skillsAll,
            data: remaining
        });
    }
    return (
        <div className="skills-preview-block">
            {skillsAll.data.length > 0 &&
                skillsAll.data.map((element: any) => {
                    return (
                        <div key={element.id} className="skills-preview-element">
                            <div className="skills-preview-delete">
                                <div onClick={()=> deleteSkill(element.id)}>
                                    <DeleteForeverIcon />
                                </div>
                            </div>
                            <div className="skills-preview">
                                <div className="skills-preview-rating">
                                    <Rating name="read-only" value={element.rate} readOnly />
                                </div>
                                <Typography component="legend">{element.name}</Typography>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
