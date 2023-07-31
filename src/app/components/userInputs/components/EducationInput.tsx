import { CvContext } from "@/app/context/context";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ListIcon from "@mui/icons-material/List";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EducationBlock from "../../shared/EducationBlock";
import { LocalStorageActions } from "@/app/context/localStorage";

export default function EducatonInput() {
    const { education, setEducation, educationAll, setEducationAll } = useContext(CvContext);

    function addEducationToList() {
        const id = uuidv4();

        setEducationAll({
            ...educationAll,
            data: [
                {
                    ...education,
                    id
                },
                ...educationAll.data,
            ],
        });
        LocalStorageActions.setItem("educationAll", {
            ...educationAll,
            data: [
                {
                    ...education,
                    id
                },
                ...educationAll.data,
                
            ],
        });
        setEducation({
            id: "",
            school: "",
            date: "",
            degree: "",
            additional: "",
        });
    }

    function deleteEducation(id: String){
        const remaining = educationAll.data.filter((w:EducationType)=> {
            if(id != w.id) {
                return w;
            }
        })
        setEducationAll({
            ...educationAll,
            data: remaining
        });
        LocalStorageActions.setItem("educationAll", {
            ...educationAll,
            data: remaining
        });
    }

    return (
        <div>
            <div className="section-input-group">
                <div className="section-title-countainer">
                    <div className="section-title-icon">
                        <SchoolIcon />
                    </div>
                    <div className="section-title-input">
                        <TextField
                            onChange={(e) =>
                                setEducationAll({
                                    ...educationAll,
                                    title: e.target.value.toUpperCase(),
                                })
                            }
                            id="standard-basic"
                            fullWidth
                            variant="standard"
                            value={educationAll.title}
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
                        setEducation({
                            ...education,
                            school: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="School"
                    variant="outlined"
                    value={education.school}
                />
            </div>
            <div className="section-input-group section-fields-one-line">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        setEducation({
                            ...education,
                            degree: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Degree"
                    variant="outlined"
                    value={education.degree}
                />
                <div className="section-input-group-right-item">
                    <TextField
                        fullWidth
                        onChange={(e) =>
                            setEducation({
                                ...education,
                                date: e.target.value,
                            })
                        }
                        id="outlined-basic"
                        label="Date"
                        variant="outlined"
                        value={education.date}
                    />
                </div>
            </div>
            <div className="section-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        setEducation({
                            ...education,
                            additional: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Additional information"
                    variant="outlined"
                    value={education.additional}
                />
            </div>
            <div className="section-input-group add-new-job-btn">
                <Button onClick={addEducationToList} variant="outlined">
                    + Add Education
                </Button>
            </div>

            <div className="section-input-group">
                {educationAll.data.length > 0 &&
                    educationAll.data.map((element: EducationType) => {
                        return (
                            <div key={element.id} className="input-added-section">
                                <div className="input-added-section-delete-container">
                                    <div className="input-added-section-delete">
                                        <DeleteForeverIcon onClick={()=> deleteEducation(element.id)} />
                                    </div>
                                </div>
                                <EducationBlock education={element} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
