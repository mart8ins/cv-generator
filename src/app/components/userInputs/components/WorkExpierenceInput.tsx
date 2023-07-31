import { CvContext } from "@/app/context/context";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ListIcon from "@mui/icons-material/List";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpierenceBlock from "@/app/components/shared/ExpierenceBlock";
import { LocalStorageActions } from "@/app/context/localStorage";

export default function WorkExpierenceInput() {
    const [valid, setValid] = useState(false);
    const { workExperience, setWorkExperience, workExperienceAll, setWorkExperienceAll } = useContext(CvContext);

    useEffect(() => {
        if (
            workExperience.company.length > 0 &&
            workExperience.job_title.length > 0 &&
            workExperience.date.length > 0 &&
            workExperience.description.length > 0
        ) {
            setValid(false)
        } else {
            setValid(true)
        }
    }, [workExperience]);

    function addExpieranceToList() {
        const id = uuidv4();
        setWorkExperienceAll({
            ...workExperienceAll,
            data: [
                {
                    ...workExperience,
                    id,
                },
                ...workExperienceAll.data,
            ],
        });
        LocalStorageActions.setItem("workExperienceAll", {
            ...workExperienceAll,
            data: [
                {
                    ...workExperience,
                    id,
                },
                ...workExperienceAll.data,
            ],
        });
        setWorkExperience({
            id: "",
            company: "",
            job_title: "",
            date: "",
            description: "",
        });
    }

    function deleteWorkExpierence(id: String) {
        const remaining = workExperienceAll.data.filter((w: WorkExpierenceType) => {
            if (id != w.id) {
                return w;
            }
        });
        setWorkExperienceAll({
            ...workExperienceAll,
            data: remaining,
        });
        LocalStorageActions.setItem("workExperienceAll", {
            ...workExperienceAll,
            data: remaining,
        });
    }

    return (
        <div>
            <div className="section-input-group">
                <div className="section-title-countainer">
                    <div className="section-title-icon">
                        <WorkIcon />
                    </div>
                    <div className="section-title-input">
                        <TextField
                            onChange={(e) =>
                                setWorkExperienceAll({
                                    ...workExperienceAll,
                                    title: e.target.value.toUpperCase(),
                                })
                            }
                            id="standard-basic"
                            fullWidth
                            variant="standard"
                            value={workExperienceAll.title}
                        />
                    </div>
                    <div className="section-title-options">
                        <ListIcon color="disabled" />
                    </div>
                </div>
            </div>
            <div className="section-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        setWorkExperience({
                            ...workExperience,
                            company: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Company"
                    variant="outlined"
                    value={workExperience.company}
                />
            </div>
            <div className="section-input-group section-fields-one-line">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        setWorkExperience({
                            ...workExperience,
                            job_title: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Job title"
                    variant="outlined"
                    value={workExperience.job_title}
                />
                <div className="section-input-group-right-item">
                    <TextField
                        fullWidth
                        onChange={(e) =>
                            setWorkExperience({
                                ...workExperience,
                                date: e.target.value,
                            })
                        }
                        id="outlined-basic"
                        label="Date"
                        variant="outlined"
                        value={workExperience.date}
                    />
                </div>
            </div>
            <div className="section-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        setWorkExperience({
                            ...workExperience,
                            description: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    value={workExperience.description}
                />
            </div>
            <div className="section-input-group add-new-job-btn">
                <Button disabled={valid} onClick={addExpieranceToList} variant="outlined">
                    + Add Job
                </Button>
            </div>

            <div className="section-input-group">
                {workExperienceAll.data.length > 0 &&
                    workExperienceAll.data.map((element: WorkExpierenceType) => {
                        return (
                            <div key={element.id} className="input-added-section">
                                <div className="input-added-section-delete-container">
                                    <div className="input-added-section-delete">
                                        <DeleteForeverIcon onClick={() => deleteWorkExpierence(element.id)} />
                                    </div>
                                </div>
                                <ExpierenceBlock workExperience={element} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
