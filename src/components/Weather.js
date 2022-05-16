import React from "react";
import WeatherCard from "./WeatherCard";

const apiKey = "323eecb3b884f86eae937878ae160d27";

let loader=false;

export default function Weather(props) {
    const [weatherData, setWeatherData] = React.useState(() => { return { fetched: false, loader: false } });
    let dailyWeatherWidget;


    // fetch weather from API
    React.useEffect(() => {
        let cityName = props.city.trim();
        cityName = cityName[0].toUpperCase() + cityName.slice(1);
        const unit = "metric";
        const URL = `https://api.openweathermap.org/data/2.5/weather?` +
            `appid=${apiKey}&q=${cityName}&units=${unit}`;

        //setLoader before fetch
        // setWeatherData((prev) => { return { ...prev, loader: true, } });
        loader=true;


        fetch(URL) //get lat & lon from cityName
            .then(response => response.json())
            .then(data => {
                if (data.cod == "200") { // === 
                    const URLOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=` +
                        `${data?.coord?.lat}&lon=${data?.coord?.lon}&units=${unit}&appid=${apiKey}`
                        + `&exclude=minutely,hourly,alerts`;
                    console.log(URLOneCall);
                    return fetch(URLOneCall)
                }
                throw (new Error("err"))
            })
            .then(result => result.json())
            .then(data => {
                //resetLoader
                setWeatherData({ ...data, fetched: true, loader: false });
                loader=false;
            })
            .catch((err) => {
                alert("City Name not found.. try again");
                props.resetStates();
            })


    }, [props.city])

    if (weatherData.fetched) {
        dailyWeatherWidget = weatherData?.daily.map((item) => {
            return (<WeatherCard
                key={item.dt}
                date={item.dt}
                fetched={weatherData.fetched}
                icon={item.weather[0].icon}
                cityName={props.city[0].toUpperCase() + props.city.slice(1)}
                description={item.weather[0].description}
                max_temp={item.temp.max}
                min_temp={item.temp.min}
            />)
        });
    }

    return (
        <div className="weather-container">
            {loader && <div className="loader"></div>}

            {!loader && dailyWeatherWidget}
        </div>
    )
}