import DetailsInput from "./components/DetailsInput";
import EducationInput from "./components/EducationInput";
import ProjectsInput from "./components/ProjectsInput";
import SkillsInput from "./components/SkillsInput";
import WorkExpierenceInput from "./components/work-expierence/WorkExpierenceInput";

export default function UserInputs() {
    return (
        <div className="userInputs">
            <div className="inputs-container">
                <DetailsInput />
            </div>

            <div className="inputs-container">
                <WorkExpierenceInput />
            </div>

            <div className="inputs-container">
                <EducationInput />
            </div>

            <div className="inputs-container">
                <ProjectsInput />
            </div>

            <div className="inputs-container">
                <SkillsInput />
            </div>
        </div>
    );
}
