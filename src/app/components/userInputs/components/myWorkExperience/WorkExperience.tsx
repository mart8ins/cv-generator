import { CvContext } from "@/app/context/context";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ListIcon from "@mui/icons-material/List";
import { LocalStorageActions } from "@/app/context/localStorage";
import WorkInput from "./WorkInput";

export default function WorkExperience() {
    const [valid, setValid] = useState(false);
    const { workExperience, setWorkExperience, workExperienceAll, setWorkExperienceAll } = useContext(CvContext);

    useEffect(() => {
        if (
            workExperience.company.length > 0 &&
            workExperience.job_title.length > 0 &&
            workExperience.date.length > 0 &&
            workExperience.description.length > 0
        ) {
            setValid(false);
        } else {
            setValid(true);
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
        const remaining = workExperienceAll.data.filter((w: WorkExperienceType) => {
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

    function changeExistingData(e: any, element: WorkExperienceType) {
        const changed = workExperienceAll.data.map((w: WorkExperienceType) => {
            if (element.id == w.id) {
                return {
                    ...element,
                    [e.target.name]: e.target.value
                }
            } else {
                return w;
            }
        });

        setWorkExperienceAll({
            ...workExperienceAll,
            data: changed,
        });
        LocalStorageActions.setItem("workExperienceAll", {
            ...workExperienceAll,
            data: changed,
        });

    }

    function changeCurrentData(e: any, element: WorkExperienceType) {
        setWorkExperience({
            ...element,
            [e.target.name]: e.target.value,
        })
    }

    function moveDataBlock(direction: string, index: number){
        const fromIndex = index;
        const toIndex = direction == "up" ? fromIndex - 1 : fromIndex + 1;
        const movedData = workExperienceAll.data;
        const movedElement = movedData.splice(fromIndex, 1)[0];
        movedData.splice(toIndex, 0, movedElement);

        setWorkExperienceAll({
            ...workExperienceAll,
            data: movedData,
        });
        LocalStorageActions.setItem("workExperienceAll", {
            ...workExperienceAll,
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

            {workExperienceAll.data.length > 0 &&
                workExperienceAll.data.map((element: WorkExperienceType, index) => {
                    return <>
                        <WorkInput
                            key={element.id}
                            index={index}
                            length={workExperienceAll.data.length}
                            element={element}
                            handleData={changeExistingData}
                            main={false}
                            deleteWorkExpierence={deleteWorkExpierence}
                            moveDataBlock={moveDataBlock} />
                        <div className="section-input-group dotted-line"></div>
                    </>
                })
            }

            <WorkInput
                element={workExperience}
                index={null}
                length={null}
                handleData={changeCurrentData}
                main={true}
                deleteWorkExpierence={null}
                moveDataBlock={null}
            />

            <div className="section-input-group add-new-job-btn">
                <Button disabled={valid} onClick={addExpieranceToList} variant="outlined">
                    + Add Job
                </Button>
            </div>

        </div>
    );
}
