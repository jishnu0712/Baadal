import React from "react";

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
                <button
                    className="btn btn-primary"
                    onClick={props.handleSubmit}
                >Get Weather</button>
            </div>
        </div>
    )
}