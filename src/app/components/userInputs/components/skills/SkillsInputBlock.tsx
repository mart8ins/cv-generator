import { CvContext } from "@/app/context/context";
import { v4 as uuidv4 } from "uuid";
import { TextField, Rating, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { LocalStorageActions } from "@/app/context/localStorage";

export default function SkillsInputBlock() {
    const [valid, setValid] = useState(false);
    const { skill, setSkill, skillsAll, setSkillsAll } = useContext(CvContext);

    useEffect(() => {
        if (
            skill.name.length > 0 &&
            skill.rate > 0
        ) {
            setValid(false)
        } else {
            setValid(true)
        }
    }, [skill]);

    useEffect(() => {
        setSkill({
            ...skill,
            id: uuidv4(),
        });
    }, []);

    const addSkill = () => {
        setSkillsAll({
            ...skillsAll,
            data: [
                ...skillsAll.data,
                skill
            ]
        })

        LocalStorageActions.setItem("skillsAll", {
            ...skillsAll,
            data: [
                ...skillsAll.data,
                skill
            ]
        });


        setSkill({
            id: uuidv4(),
            name: "",
            rate: 0
        })
    }

    return (
        <div>
            <div className="skills-fields-container">
                <TextField
                    id="outlined-basic"
                    label="Skill"
                    variant="outlined"
                    value={skill.name}
                    onChange={(e) => {
                        setSkill({
                            ...skill,
                            name: e.target.value,
                        });
                    }}
                />
                <Rating
                    name="size-large"
                    value={skill.rate}
                    size="large"
                    onChange={(e:any, newValue: any) => {
                        setSkill({
                            ...skill,
                            rate: newValue,
                        });
                    }}
                />
            </div>
            <div className="skills-btn-container">
                <Button disabled={valid} onClick={addSkill} variant="outlined">+ Add Skill</Button>
            </div>
        </div>
    );
}
