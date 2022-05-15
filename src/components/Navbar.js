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
                    type="text"
                    placeholder="Enter city"
                />
                <button>🔍</button>
            </div>}
        </nav>
    )
}