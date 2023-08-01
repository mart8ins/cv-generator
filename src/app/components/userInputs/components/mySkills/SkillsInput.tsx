import { TextField, Rating } from "@mui/material";

export default function SkillsInput({ element, handelSkill }: { element: any, handelSkill: any }) {

    return (
        <div>
            <div className="skills-fields-container">
                <div className="skills-fields-name"><TextField
                    id="outlined-basic"
                    label="Skill"
                    variant="outlined"
                    value={element.name}
                    size="small"
                    onChange={(e)=> {handelSkill(e, element.id)}}
                    name="name"
                /></div>
                <div className="skills-fields-rating">
                    <Rating
                        value={element.rate}
                        size="medium"
                        onChange={(e)=> {handelSkill(e, element.id)}}
                        name="rate"
                    />
                </div>
            </div>
        </div>
    );
}
