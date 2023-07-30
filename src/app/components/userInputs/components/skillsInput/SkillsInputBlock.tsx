import { CvContext } from "@/app/context/context";
import { v4 as uuidv4 } from "uuid";
import { TextField, Rating, Button } from "@mui/material";
import { useContext, useEffect } from "react";

export default function SkillsInputBlock() {
    const { skill, setSkill, skillsAll, setSkillsAll } = useContext(CvContext);

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
        setSkill({
            id: uuidv4(),
            name: "",
            rate: null
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
                    onChange={(e, newValue: number | null) => {
                        setSkill({
                            ...skill,
                            rate: newValue,
                        });
                    }}
                />
            </div>
            <div className="skills-btn-container">
                <Button onClick={addSkill} variant="outlined">+ Add Skill</Button>
            </div>
        </div>
    );
}
