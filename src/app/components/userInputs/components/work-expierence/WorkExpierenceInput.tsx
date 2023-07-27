import { CvContext } from "@/app/context/context";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ListIcon from "@mui/icons-material/List";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpierenceBlock from "@/app/components/pdfPreview/components/expierencePreview/ExpierenceBlock";

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

    function deleteWorkExpierence(id: String){
        const remaining = workExperienceAll.data.filter((w:any)=> {
            if(id != w.id) {
                return w;
            }
        })
        setWorkExperienceAll({
            ...workExperienceAll,
            data: remaining
        });
    }

    return (
        <div>
            <div className="expierence-input-group">
                <div className="expierence-title-countainer">
                    <div className="expierence-title-icon">
                        <WorkIcon />
                    </div>
                    <div className="expierence-title-input">
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
                    <div className="expierence-title-options">
                        <ListIcon color="disabled" />
                    </div>
                </div>
            </div>
            <div className="expierence-input-group">
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
            <div className="expierence-input-group expierence-fields-one-line">
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
                <div className="expierence-input-group-right-item">
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
            <div className="expierence-input-group">
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
            <div className="expierence-input-group add-new-job-btn">
                <Button onClick={addExpieranceToList} variant="outlined">
                    + Add Job
                </Button>
            </div>

            <div className="expierence-input-group">
                {workExperienceAll.data.length > 0 &&
                    workExperienceAll.data.map((element: any) => {
                        return (
                            <div key={element.id} className="input-added-expierance">
                                <div className="input-added-expierance-delete-container">
                                    <div className="input-added-expierance-delete">
                                        <DeleteIcon onClick={()=> deleteWorkExpierence(element.id)} />
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
