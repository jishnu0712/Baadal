import React from "react";

export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="nav-brand">
                <h1 className="logo">☁️</h1>
                <h3 className="nav-title">Baadal</h3>
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter city"

                />
                <button>search</button>
            </div>
        </nav>
    )
}