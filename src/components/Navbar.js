import React from "react";

export default function Navbar(props) {
    return (
        <nav className="Navbar">
            <div className="nav-brand" onClick={props.handleClick}>
                <h1 className="logo">☁️</h1>
                <h3 className="nav-title">Baadal</h3>
            </div>
            {props.showWeather && <div className="search-bar">
                <input
                    className="nav-input"
                    type="text"
                    placeholder="Enter city"
                    onChange={props.handleChange}
                />
                <button className="nav-button" onClick={props.handleSubmit}>🔍</button>
            </div>}
        </nav>
    )
}