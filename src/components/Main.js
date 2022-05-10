import React from "react";

export default function Main(props) {
    return (
        <div className="Main">
            <form className="form" 
            onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter City"
                    onChange={props.handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}