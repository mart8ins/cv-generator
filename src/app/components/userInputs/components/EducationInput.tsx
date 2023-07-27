import { CvContext } from "@/app/context/context";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ListIcon from "@mui/icons-material/List";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EducationBlock from "../../shared/EducationBlock";

export default function EducatonInput() {
    const { education, setEducation, educationAll, setEducationAll } = useContext(CvContext);

    function addEducationToList() {
        setEducationAll({
            ...educationAll,
            data: [
                ...educationAll.data,
                {
                    ...education,
                    id: uuidv4(),
                },
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
        const remaining = educationAll.data.filter((w:any)=> {
            if(id != w.id) {
                return w;
            }
        })
        setEducationAll({
            ...educationAll,
            data: remaining
        });
    }

    return (
        <div>
            <div className="expierence-input-group">
                <div className="expierence-title-countainer">
                    <div className="expierence-title-icon">
                        <SchoolIcon />
                    </div>
                    <div className="expierence-title-input">
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
                    <div className="expierence-title-options">
                        <ListIcon color="disabled" />
                    </div>
                </div>
            </div>
            <div className="expierence-input-group">
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
            <div className="expierence-input-group expierence-fields-one-line">
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
                <div className="expierence-input-group-right-item">
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
            <div className="expierence-input-group">
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
            <div className="expierence-input-group add-new-job-btn">
                <Button onClick={addEducationToList} variant="outlined">
                    + Add Education
                </Button>
            </div>

            <div className="expierence-input-group">
                {educationAll.data.length > 0 &&
                    educationAll.data.map((element: any) => {
                        return (
                            <div key={element.id} className="input-added-expierance">
                                <div className="input-added-expierance-delete-container">
                                    <div className="input-added-expierance-delete">
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
