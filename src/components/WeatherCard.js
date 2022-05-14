import React from "react";

export default function WeatherCard(props) {
    const { weatherData } = props
    let date = new Date((weatherData?.daily[0]?.dt)*1000);
    const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    return (
        <div className="weather-card">
            {weatherData.fetched && <img
                src={`http://openweathermap.org/img/wn/` +
                    `${weatherData?.current?.weather[0]?.icon}@2x.png`}
                alt="weather-desc-icon"
                className="weather-icon" />}
            <h2>{props.cityName}</h2>
            <h1>{weatherData?.current?.weather[0]?.description}</h1>
            <h1>{weatherData?.current?.temp}°C</h1>
            <h2>{day[date.getDay()]}</h2>
        </div>
    )
}