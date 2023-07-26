import DetailsInput from "./components/DetailsInput";
import EducationInput from "./components/EducationInput";
import ProjectsInput from "./components/ProjectsInput";
import SkillsInput from "./components/SkillsInput";
import WorkExperienceInput from "./components/WorkExperienceInput";

export default function UserInputs() {
    return (
        <div className="userInputs">
            <DetailsInput />
            {/* <WorkExperienceInput />
            <EducationInput />
            <ProjectsInput />
            <SkillsInput /> */}
        </div>
    );
}
