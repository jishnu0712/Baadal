import React from "react";
import WeatherCard from "./WeatherCard";

export default function Weather(props) {
    const [weatherData, setWeatherData] = React.useState({ fetched: false, loader: false });

    console.log(weatherData, "weather");
    // fetch weather from API
    React.useEffect(() => {
        setWeatherData((prev) => { return { ...prev, fetched: false } })
        let cityName = props.city;

        const apiKey = "323eecb3b884f86eae937878ae160d27";
        const unit = "metric";

        const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${cityName}&units=${unit}`;


        //setLoader before fetch
        setWeatherData((prev) => {
            return {
                ...prev,
                loader: true,
            }
        })
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setWeatherData({ ...data, fetched: true, loader: false });
                //resetLoader

            })
        // const URLOneCall = "https://api.openweathermap.org/data/2.5/onecall?lat="
        //     + weatherData?.coord.lat + "&lon=" + weatherData?.coord.lon + "&appid=" + apiKey;
        // fetch(URLOneCall)
        //     .then(res => res.json)
        //     .then(dataOneCall => {
        //         console.log(dataOneCall);
        //     })

    }, [props.city])

    return (
        <div className="weather-container">
            {weatherData.loader && <div className="loader"></div>}

            {!weatherData.loader && <WeatherCard
                weatherData={weatherData}
            />}
        </div>
    )
}