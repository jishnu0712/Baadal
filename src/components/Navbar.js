import React from "react";
import { Button } from '@mui/material/';


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
                    <Button variant='contained'color="primary" onClick={props.handleSubmit}>🔍</Button>
                </form>
            </div>}
        </nav>
    )
}