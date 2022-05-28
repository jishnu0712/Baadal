import React from "react";

export default function WeatherCard({date,icon,fetched,cityName,description,max_temp,min_temp}) {

    let dateInJS = new Date((date) * 1000);
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div className="weather-card">
            {fetched && <img
                src={`http://openweathermap.org/img/wn/` +
                    `${icon}@2x.png`}
                alt="weather-desc-icon"
                className="weather-icon" />}
            <h3>{cityName}</h3>
            <p>{description}</p>
            <span className="temp">{max_temp}°C</span><span className="temp">/ {min_temp}°C</span>
            <h2>{day[dateInJS.getDay()]}</h2>
        </div>
    )
}
