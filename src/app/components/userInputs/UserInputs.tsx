import DetailsInput from "./components/details/DetailsInput";
import SettingsInput from "./components/SettingsInput";
import Education from "./components/education/Education";
import SkillsInput from "./components/skillsInput/SkillsInput";
import WorkExperience from "./components/workExperience/WorkExperience";
import Project from "./components/project/Project";

export default function UserInputs() {
    return (
        <div className="userInputs">
            <div className="inputs-container">
                <DetailsInput />
            </div>

            {/* <div className="inputs-container">
                <WorkExperience />
            </div> */}

            {/* <div className="inputs-container">
                <Education />
            </div> */}

            <div className="inputs-container">
                <Project />
            </div>

            {/* <div className="inputs-container">
                <SkillsInput />
            </div>

            <div className="inputs-container">
                <SettingsInput />
            </div> */}

            <div className="inputs-container spacer-div"></div>
        </div>
    );
}
