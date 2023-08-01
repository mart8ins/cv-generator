import DetailsInput from "./components/DetailsInput";
import EducationInput from "./components/EducationInput";
import ProjectsInput from "./components/ProjectsInput";
import SettingsInput from "./components/SettingsInput";
import SkillsInput from "./components/skillsInput/SkillsInput";
import WorkExperience from "./components/workExperience/WorkExperience";

export default function UserInputs() {
    return (
        <div className="userInputs">
            <div className="inputs-container">
                <DetailsInput />
            </div>

            <div className="inputs-container">
                <WorkExperience />
            </div>

            <div className="inputs-container">
                <EducationInput />
            </div>

            {/* <div className="inputs-container">
                <ProjectsInput />
            </div>

            <div className="inputs-container">
                <SkillsInput />
            </div>

            <div className="inputs-container">
                <SettingsInput />
            </div> */}

            <div className="inputs-container spacer-div"></div>
        </div>
    );
}
