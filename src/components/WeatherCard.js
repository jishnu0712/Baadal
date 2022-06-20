import React from "react";

export default function WeatherCard({ date, icon, fetched, cityName, description, max_temp, min_temp }) {

    let dateInJS = new Date((date) * 1000);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    console.log(dateInJS.toLocaleDateString("en-in",options))
    return (
        <div className="weather-card">
            {fetched && <img
                src={`http://openweathermap.org/img/wn/` +
                    `${icon}@2x.png`}
                alt="weather-desc-icon"
                className="weather-icon" />}
            <p><strong>{cityName}</strong></p>
            <h6>{description}</h6>
            <span className="temp">{max_temp}°C / {min_temp}°C</span>
            <p><em>{dateInJS.toLocaleDateString("en-in",options)}</em></p>
        </div>
    )
}
