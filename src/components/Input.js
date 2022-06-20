import React from "react";
import { Button } from '@mui/material';

export default function Input(props) {
    return (
        <div className="canvas">
            <div className="form-input">
                <input
                    className="main-input"
                    type="text"
                    name='main-input'
                    placeholder="City..."
                    onChange={props.handleChange}
                    value={props.formData}
                    required
                    autoComplete="off"
                />
                <Button
                    variant='contained'
                    onClick={props.handleSubmit}
                >Get Weather</Button>
            </div>
        </div>
    )
}