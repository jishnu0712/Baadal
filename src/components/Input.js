import React from "react";

export default function Input(props) {
    return (
        <div className={(!props.showWeather) ? "Input-box" : ""}>
            <form className={(!props.showWeather) ? "form-input form-input-shadow" : "form-input"}
                onSubmit={props.handleSubmit}>
                
                <input
                className="main-input"
                    type="text"
                    placeholder="Enter City Name"
                    onChange={props.handleChange}
                    value={props.formData}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}