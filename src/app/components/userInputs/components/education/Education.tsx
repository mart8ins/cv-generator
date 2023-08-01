import { CvContext } from "@/app/context/context";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ListIcon from "@mui/icons-material/List";
import { LocalStorageActions } from "@/app/context/localStorage";
import EducationInput from "./EducationInput";

export default function Education() {
    const [valid, setValid] = useState(false);
    const { education, setEducation, educationAll, setEducationAll } = useContext(CvContext);

    useEffect(() => {
        if (
            education.school.length > 0 &&
            education.degree.length > 0 &&
            education.date.length > 0 &&
            education.additional.length > 0
        ) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [education]);

    function addEducationToList() {
        const id = uuidv4();
        setEducationAll({
            ...educationAll,
            data: [
                {
                    ...education,
                    id,
                },
                ...educationAll.data,
            ],
        });
        LocalStorageActions.setItem("educationAll", {
            ...educationAll,
            data: [
                {
                    ...education,
                    id,
                },
                ...educationAll.data,
            ],
        });
        setEducation({
            id: "",
            school: "",
            degree: "",
            date: "",
            additional: "",
        });
    }

    function deleteEducation(id: String) {
        const remaining = educationAll.data.filter((w: EducationType) => {
            if (id != w.id) {
                return w;
            }
        });
        setEducationAll({
            ...educationAll,
            data: remaining,
        });
        LocalStorageActions.setItem("educationAll", {
            ...educationAll,
            data: remaining,
        });
    }

    function changeExistingData(e: any, element: EducationType) {
        const changed = educationAll.data.map((w: EducationType) => {
            if (element.id == w.id) {
                return {
                    ...element,
                    [e.target.name]: e.target.value
                }
            } else {
                return w;
            }
        });

        setEducationAll({
            ...educationAll,
            data: changed,
        });
        LocalStorageActions.setItem("educationAll", {
            ...educationAll,
            data: changed,
        });

    }

    function changeCurrentData(e: any, element: EducationType) {
        setEducation({
            ...element,
            [e.target.name]: e.target.value,
        })
    }

    function moveDataBlock(direction: string, index: number){
        const fromIndex = index;
        const toIndex = direction == "up" ? fromIndex - 1 : fromIndex + 1;
        const movedData = educationAll.data;
        const movedElement = movedData.splice(fromIndex, 1)[0];
        movedData.splice(toIndex, 0, movedElement);

        setEducationAll({
            ...educationAll,
            data: movedData,
        });
        LocalStorageActions.setItem("educationAll", {
            ...educationAll,
            data: movedData,
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

            {educationAll.data.length > 0 &&
                educationAll.data.map((element: EducationType, index) => {
                    return <>
                        <EducationInput
                            key={element.id}
                            index={index}
                            length={educationAll.data.length}
                            element={element}
                            handleData={changeExistingData}
                            main={false}
                            deleteEducation={deleteEducation}
                            moveDataBlock={moveDataBlock} />
                        <div className="section-input-group dotted-line"></div>
                    </>
                })
            }

            <EducationInput
                element={education}
                index={null}
                length={null}
                handleData={changeCurrentData}
                main={true}
                deleteEducation={null}
                moveDataBlock={null}
            />

            <div className="section-input-group add-new-job-btn">
                <Button disabled={valid} onClick={addEducationToList} variant="outlined">
                    + Add Education
                </Button>
            </div>

        </div>
    );
}
