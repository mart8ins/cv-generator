import { CvContext } from "@/app/context/context";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import ListIcon from "@mui/icons-material/List";
import { LocalStorageActions } from "@/app/context/localStorage";
import ProjectInput from "./ProjectInput";

export default function Project() {
    const [valid, setValid] = useState(false);
    const { project, setProject, projectsAll, setProjectsAll } = useContext(CvContext);

    useEffect(() => {
        if (
            project.name.length > 0 &&
            project.date.length > 0 &&
            project.description.length > 0 &&
            project.link.length > 0
        ) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [project]);

    function addProjectToList() {
        const id = uuidv4();
        setProjectsAll({
            ...projectsAll,
            data: [
                {
                    ...project,
                    id,
                },
                ...projectsAll.data,
            ],
        });
        LocalStorageActions.setItem("projectsAll", {
            ...projectsAll,
            data: [
                {
                    ...project,
                    id,
                },
                ...projectsAll.data,
            ],
        });
        setProject({
            id: "",
            name: "",
            date: "",
            description: "",
            link: "",
        });
    }

    function deleteProject(id: String) {
        const remaining = projectsAll.data.filter((w: ProjectsType) => {
            if (id != w.id) {
                return w;
            }
        });
        setProjectsAll({
            ...projectsAll,
            data: remaining,
        });
        LocalStorageActions.setItem("projectsAll", {
            ...projectsAll,
            data: remaining,
        });
    }

    function changeExistingData(e: any, element: ProjectsType) {
        const changed = projectsAll.data.map((w: ProjectsType) => {
            if (element.id == w.id) {
                return {
                    ...element,
                    [e.target.name]: e.target.value
                }
            } else {
                return w;
            }
        });

        setProjectsAll({
            ...projectsAll,
            data: changed,
        });
        LocalStorageActions.setItem("projectsAll", {
            ...projectsAll,
            data: changed,
        });

    }

    function changeCurrentData(e: any, element: ProjectsType) {
        setProject({
            ...element,
            [e.target.name]: e.target.value,
        })
    }

    function moveDataBlock(direction: string, index: number){
        const fromIndex = index;
        const toIndex = direction == "up" ? fromIndex - 1 : fromIndex + 1;
        const movedData = projectsAll.data;
        const movedElement = movedData.splice(fromIndex, 1)[0];
        movedData.splice(toIndex, 0, movedElement);

        setProjectsAll({
            ...projectsAll,
            data: movedData,
        });
        LocalStorageActions.setItem("projectsAll", {
            ...projectsAll,
            data: movedData,
        });
    }

    return (
        <div>
            <div className="section-input-group">
                <div className="section-title-countainer">
                    <div className="section-title-icon">
                        <DescriptionIcon />
                    </div>
                    <div className="section-title-input">
                        <TextField
                            onChange={(e) =>
                                setProjectsAll({
                                    ...projectsAll,
                                    title: e.target.value.toUpperCase(),
                                })
                            }
                            id="standard-basic"
                            fullWidth
                            variant="standard"
                            value={projectsAll.title}
                        />
                    </div>
                    <div className="section-title-options">
                        <ListIcon color="disabled" />
                    </div>
                </div>
            </div>

            {projectsAll.data.length > 0 &&
                projectsAll.data.map((element: ProjectsType, index) => {
                    return <>
                        <ProjectInput
                            key={element.id}
                            index={index}
                            length={projectsAll.data.length}
                            element={element}
                            handleData={changeExistingData}
                            main={false}
                            deleteProject={deleteProject}
                            moveDataBlock={moveDataBlock} />
                        <div className="section-input-group dotted-line"></div>
                    </>
                })
            }

            <ProjectInput
                element={project}
                index={null}
                length={null}
                handleData={changeCurrentData}
                main={true}
                deleteProject={null}
                moveDataBlock={null}
            />

            <div className="section-input-group add-new-job-btn">
                <Button disabled={valid} onClick={addProjectToList} variant="outlined">
                    + Add Project
                </Button>
            </div>

        </div>
    );
}
