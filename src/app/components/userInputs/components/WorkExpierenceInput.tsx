import { CvContext } from "@/app/context/context";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ListIcon from "@mui/icons-material/List";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ExpierenceBlock from "@/app/components/shared/ExpierenceBlock";

export default function WorkExpierenceInput() {
    const { workExperience, setWorkExperience, workExperienceAll, setWorkExperienceAll } = useContext(CvContext);

    function addExpieranceToList() {
        setWorkExperienceAll({
            ...workExperienceAll,
            data: [
                ...workExperienceAll.data,
                {
                    ...workExperience,
                    id: uuidv4(),
                },
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
        const remaining = workExperienceAll.data.filter((w: any) => {
            if (id != w.id) {
                return w;
            }
        });
        setWorkExperienceAll({
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
                <Button onClick={addExpieranceToList} variant="outlined">
                    + Add Job
                </Button>
            </div>

            <div className="section-input-group">
                {workExperienceAll.data.length > 0 &&
                    workExperienceAll.data.map((element: any) => {
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
