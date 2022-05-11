import React from "react";

export default function Input(props) {
    return (
        <div className={(!props.weather) ? "Main" : ""}>
            <form className="form-input"
                onSubmit={props.handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter City"
                    onChange={props.handleChange}
                    value={props.value}
                />

                <button>Submit</button>
            </form>
        </div>
    )
}