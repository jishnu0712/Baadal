import React from "react";

export default function WeatherCard(props) {
    return(
        <div className="weather-card">
                    {props.weatherData.fetched && <img
                        src={"http://openweathermap.org/img/wn/"
                            + props.weatherData?.weather?.[0]?.icon + "@2x.png"}
                        alt="icon"
                        className="weather-icon" />}
                    <h2>{props.weatherData?.name}</h2>
                    <h1>{props.weatherData?.weather?.[0]?.description}</h1>
                    <h1>{props.weatherData?.main?.temp_max}°C</h1>

                </div>
    )
}