import React from "react";

export default function Navbar(props) {
    return (
        <nav className="Navbar">
            <div className="nav-brand" onClick={props.handleClick}>
                <h1 className="logo">☁️</h1>
                <h3 className="nav-title">Baadal</h3>
            </div>
            {props.showWeather && <div className="search-bar">
                <form onSubmit={props.handleSubmit}>
                    <input
                        className="nav-input"
                        type="text"
                        placeholder="City..."
                        value={props.value}
                        onChange={props.handleChange}
                    />
                    <button className="nav-button" onClick={props.handleSubmit}>🔍</button>
                </form>
            </div>}
        </nav>
    )
}