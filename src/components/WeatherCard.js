import React from "react";

export default function WeatherCard(props) {

    let date = new Date((props.date) * 1000);
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div className="weather-card">
            {props.fetched && <img
                src={`http://openweathermap.org/img/wn/` +
                    `${props.icon}@2x.png`}
                alt="weather-desc-icon"
                className="weather-icon" />}
            <h3>{props.cityName}</h3>
            <p>{props.description}</p>
            <span className="temp">{props.max_temp}°C</span><span className="temp">/ {props.min_temp}°C</span>
            <h2>{day[date.getDay()]}</h2>
        </div>
    )
}
