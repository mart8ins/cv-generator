import { CvContext } from "@/app/context/context";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import ListIcon from "@mui/icons-material/List";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ProjectBlock from "../../shared/ProjectBlock";
import { LocalStorageActions } from "@/app/context/localStorage";

export default function ProjectsInput() {
    const [valid, setValid] = useState(false);
    const { project, setProject, projectsAll, setProjectsAll } = useContext(CvContext);

    useEffect(() => {
        if (
            project.name.length > 0 &&
            project.date.length > 0 &&
            project.description.length > 0 &&
            project.link.length > 0
        ) {
            setValid(false)
        } else {
            setValid(true)
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

    return (
        <div>
            <div className="section-input-group">
                <div className="section-title-countainer">
                    <div className="section-title-icon">
                        <WebIcon />
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

            <div className="section-input-group section-fields-one-line">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        setProject({
                            ...project,
                            name: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={project.name}
                />
                <div className="section-input-group-right-item">
                    <TextField
                        fullWidth
                        onChange={(e) =>
                            setProject({
                                ...project,
                                date: e.target.value,
                            })
                        }
                        id="outlined-basic"
                        label="Date"
                        variant="outlined"
                        value={project.date}
                    />
                </div>
            </div>
            <div className="section-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        setProject({
                            ...project,
                            link: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Link"
                    variant="outlined"
                    value={project.link}
                />
            </div>
            <div className="section-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        setProject({
                            ...project,
                            description: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    value={project.description}
                />
            </div>

            <div className="section-input-group add-new-job-btn">
                <Button disabled={valid} onClick={addProjectToList} variant="outlined">
                    + Add Project
                </Button>
            </div>

            <div className="section-input-group">
                {projectsAll.data.length > 0 &&
                    projectsAll.data.map((element: ProjectsType) => {
                        return (
                            <div key={element.id} className="input-added-section">
                                <div className="input-added-section-delete-container">
                                    <div className="input-added-section-delete">
                                        <DeleteForeverIcon onClick={() => deleteProject(element.id)} />
                                    </div>
                                </div>
                                <ProjectBlock project={element} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
