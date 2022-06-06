import React from "react";
import { Button } from '@mui/material';

export default function Input(props) {
    //const classes = useStyles()
    return (
        <div className={"canvas"}>
            <div className={"form-input"} //remove
            // onSubmit={props.handleSubmit}
            >
                <input
                    className="main-input"
                    type="text"
                    name='main-input'
                    placeholder="City..."
                    onChange={props.handleChange}
                    value={props.formData}
                    required
                />
                <Button
                    variant='contained'
                    onClick={props.handleSubmit}
                >Get Weather</Button>
            </div>
        </div>
    )
}