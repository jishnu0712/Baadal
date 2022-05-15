import React from "react";
import WeatherCard from "./WeatherCard";

const apiKey = "323eecb3b884f86eae937878ae160d27";

export default function Weather(props) {
    const [weatherData, setWeatherData] = React.useState(() => { return { fetched: false, loader: false } });
    let dailyWeatherWidget;
    // fetch weather from API
    React.useEffect(() => {
        setWeatherData((prev) => { return { ...prev, fetched: false } })
        
        let cityName = props.city;
        const unit = "metric";
        const URL = `https://api.openweathermap.org/data/2.5/weather?` +
            `appid=${apiKey}&q=${cityName}&units=${unit}`;

        //setLoader before fetch
        setWeatherData((prev) => { return { ...prev, loader: true, } });

        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const URLOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=` +
                    `${data?.coord?.lat}&lon=${data?.coord?.lon}&units=${unit}&appid=${apiKey}`
                    + `&exclude=minutely,hourly,alerts`;
                return fetch(URLOneCall)
            })
            .then(result => result.json())
            .then(data => {
                //resetLoader
                setWeatherData({ ...data, fetched: true, loader: false });
            })
        //not working
        // , (err) => {
        //     console.log(err);
        //     alert("Location not found, please enter without space");
        //     props.resetStates();
        // })

    }, [props.city])

    if (weatherData.fetched) {
        dailyWeatherWidget = weatherData?.daily.map((item) => {
            return (<WeatherCard
                key={item.dt}
                date={item.dt}
                fetched={weatherData.fetched}
                icon={item.weather[0].icon}
                cityName={props.city}
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