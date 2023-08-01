import { TextField } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function WorkInput({ index, length, element,
    handleData,
    main,
    deleteWorkExpierence,
    moveDataBlock }:
    {
        element: WorkExperienceType,
        index: any,
        length: any,
        handleData: any,
        main: boolean,
        deleteWorkExpierence: any,
        moveDataBlock: any
    }) {

    return (
        <div>
            {!main && <div className="section-input-group section-title-countainer">
                <div className="section-data-options">
                    {index > 0 &&
                        <div>
                            <ArrowUpwardIcon onClick={() => moveDataBlock("up", index)} />
                        </div>
                    }
                    {
                        length > 0 && length - 1 != index &&
                        <div>
                            <ArrowDownwardIcon onClick={() => moveDataBlock("down", index)} />
                        </div>
                    }

                    <div>
                        <DeleteForeverIcon onClick={() => deleteWorkExpierence(element.id)} />
                    </div>
                </div>
            </div>}

            <div className="section-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        handleData(e, element)
                    }
                    id="outlined-basic"
                    label="Company"
                    variant="outlined"
                    value={element.company}
                    name="company"
                />
            </div>
            <div className="section-input-group section-fields-one-line">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        handleData(e, element)
                    }
                    id="outlined-basic"
                    label="Job title"
                    variant="outlined"
                    value={element.job_title}
                    name="job_title"
                />
                <div className="section-input-group-right-item">
                    <TextField
                        fullWidth
                        onChange={(e) =>
                            handleData(e, element)
                        }
                        id="outlined-basic"
                        label="Date"
                        variant="outlined"
                        value={element.date}
                        name="date"
                    />
                </div>
            </div>
            <div className="section-input-group">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        handleData(e, element)
                    }
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    value={element.description}
                    name="description"
                />
            </div>
        </div>)
};