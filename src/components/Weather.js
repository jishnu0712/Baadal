import React from "react";
import WeatherCard from "./WeatherCard";

const apiKey = "323eecb3b884f86eae937878ae160d27";

export default function Weather({ city, resetStates }) {
    const [weatherData, setWeatherData] = React.useState(() => {
        return { fetched: false, loader: false }
    });
    let dailyWeatherWidget;

    // fetch  from API
    React.useEffect(() => {
        let cityName = city.trim();
        cityName = cityName[0].toUpperCase() + cityName.slice(1);
        const unit = "metric";
        const URL = `https://api.openweathermap.org/data/2.5/weather?` +
            `appid=${apiKey}&q=${cityName}&units=${unit}`;

        //setLoader before fetch
        setWeatherData(prev => ({...prev,loader:true}))

        fetch(URL) //get lat & lon from cityName
            .then(response => response.json())
            .then(data => {
                if (data.cod !== 200) {
                    throw (new Error("city"))
                }
                const URLOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=` +
                    `${data?.coord?.lat}&lon=${data?.coord?.lon}&units=${unit}&appid=${apiKey}`
                    + `&exclude=minutely,hourly,alerts`;
                return fetch(URLOneCall)
            })
            .then(response => response.json())
            .then(data => {
                //resetLoader
                setWeatherData({ ...data, fetched: true, loader: false });
            })
            .catch((err) => {
                alert('city name not found');
                resetStates();
            })
    }, [city])

    if (weatherData.fetched) {
        dailyWeatherWidget = weatherData.daily.map((item) => {
            return (<WeatherCard
                key={item.dt}
                date={item.dt}
                fetched={weatherData.fetched}
                icon={item.weather[0].icon}
                cityName={city[0].toUpperCase() + city.slice(1)}
                description={item.weather[0].description}
                max_temp={item.temp.max}
                min_temp={item.temp.min}
            />)
        });
    }

    return (
        <div className="weather-container">
            {weatherData.loader && <div className="loader"></div>}
            {!weatherData.loader && dailyWeatherWidget}
        </div>
    )
}