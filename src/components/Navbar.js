import React from "react";
import "./Navbar.css"

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <div className="nav-brand" onClick={props.handleClick}>
                <h1 className="logo">☁️</h1>
                <h3 className="nav-title">Baadal</h3>
            </div>
            
            {props.showWeather && <div className="search-bar">

                <input
                    className="form-control mr-sm-2 nav-input"
                    type="text"
                    placeholder="City..."
                    value={props.value}
                    onChange={props.handleChange}
                />
                <button className="nav-search-btn btn btn-outline-light my-2 my-sm-0 mx-2"
                    onClick={props.handleSubmit}>🔍</button>

            </div>}
        </nav>
    )
}
