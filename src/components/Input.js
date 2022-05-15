import React from "react";

export default function Input(props) {
    return (
        <div className={"canvas"}>
            <form className={"form-input"}
                onSubmit={props.handleSubmit}>
                
                <input
                className="main-input"
                    type="text"
                    placeholder="City..."
                    onChange={props.handleChange}
                    value={props.formData}
                />
                <button>Get Weather</button>
            </form>
        </div>
    )
}