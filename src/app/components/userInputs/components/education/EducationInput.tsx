import { TextField } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function EducationInput({ index, length, element,
    handleData,
    main,
    deleteEducation,
    moveDataBlock }:
    {
        element: EducationType,
        index: any,
        length: any,
        handleData: any,
        main: boolean,
        deleteEducation: any,
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
                        <DeleteForeverIcon onClick={() => deleteEducation(element.id)} />
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
                    label="School"
                    variant="outlined"
                    value={element.school}
                    name="school"
                />
            </div>
            <div className="section-input-group section-fields-one-line">
                <TextField
                    fullWidth
                    onChange={(e) =>
                        handleData(e, element)
                    }
                    id="outlined-basic"
                    label="Degree"
                    variant="outlined"
                    value={element.degree}
                    name="degree"
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
                    label="Additional"
                    variant="outlined"
                    value={element.additional}
                    name="additional"
                />
            </div>
        </div>)
};