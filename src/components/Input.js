import React from "react";

export default function Input(props) {
    return (
        <div className={"Input-box"}>
            <form className={"form-input form-input-shadow"}
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