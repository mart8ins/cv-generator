import DetailsInput from "./components/myDetails/DetailsInput";
import SettingsInput from "./components/cv-settings/SettingsInput";
import Education from "./components/myEducation/Education";
import Skills from "./components/mySkills/Skills";
import WorkExperience from "./components/myWorkExperience/WorkExperience";
import Project from "./components/myProjects/Project";

export default function UserInputs() {
    return (
        <div className="userInputs">
            <div className="inputs-container">
                <DetailsInput />
            </div>

            {/* <div className="inputs-container">
                <WorkExperience />
            </div>

            <div className="inputs-container">
                <Education />
            </div>

            <div className="inputs-container">
                <Project />
            </div> */}

            <div className="inputs-container">
                <Skills />
            </div>

            <div className="inputs-container">
                <SettingsInput />
            </div>

            <div className="inputs-container spacer-div"></div>
        </div>
    );
}
