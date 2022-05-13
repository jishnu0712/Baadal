import React from "react";

export default function WeatherCard(props) {
    const {weatherData} = props
    return(
        <div className="weather-card">
                    {weatherData.fetched && <img
                        src={"http://openweathermap.org/img/wn/"
                            + props.weatherData?.weather?.[0]?.icon + "@2x.png"}
                        alt="icon"
                        className="weather-icon" />}
                    <h2>{weatherData?.name}</h2>
                    <h1>{weatherData?.weather?.[0]?.description}</h1>
                    <h1>{weatherData?.main?.temp_max}°C</h1>

                </div>
    )
}