import { CvContext } from "@/app/context/context";
import { useContext } from "react";
import { TextField } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ListIcon from "@mui/icons-material/List";
import SkillsInput from "./SkillsInput";
import { LocalStorageActions } from "@/app/context/localStorage";

export default function Skills() {
    const { skillsAll, setSkillsAll } = useContext(CvContext);

    function handelSkill(e: any, id: any){
        const forUpdate = [...skillsAll.data];
        const mapped = forUpdate.map((skill)=> {
            if(skill.id == id) {
                return {
                    ...skill,
                    [e.target.name]: e.target.value
                }
            } else {
                return skill;
            }
        });
        setSkillsAll({
            ...skillsAll,
            data: mapped
        });
        LocalStorageActions.setItem("skillsAll", {
            ...skillsAll,
            data: mapped
        });
    }

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

                <div className="skills-title">Highlight your top skills!</div>
                <div className="skills-container">
                    {skillsAll.data.length > 0 &&
                        skillsAll.data.map((element: any) => {
                            return <SkillsInput key={element.id} element={element} handelSkill={handelSkill} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}
