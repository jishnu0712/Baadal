import React from "react";

export default function Weather(props) {
    const [weatherData, setWeatherData] = React.useState({ fetched: false });

    // fetch weather from API
    React.useEffect(() => {
        setWeatherData((prev) => { return { ...prev, fetched: false } })
        let cityName = props.city;

        const apiKey = "323eecb3b884f86eae937878ae160d27";
        const unit = "metric";

        const URL = "https://api.openweathermap.org/data/2.5/weather?appid="
            + apiKey + "&q=" + cityName + "&units=" + unit + "";

        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setWeatherData({...data,fetched:true});
            });
    }, [props.city])

    return (
        <div className="weather-card">
            <div className="container">
                {weatherData.fetched && <img
                    src={"http://openweathermap.org/img/wn/" + weatherData?.weather[0]?.icon + "@2x.png"}
                    alt="icon"
                    className="weather-icon" />}
                <h1>{weatherData?.main?.temp_max}Deg Cel</h1>
                <pre>{JSON.stringify(weatherData, null, 2)}</pre>
            </div>
        </div>
    )
}