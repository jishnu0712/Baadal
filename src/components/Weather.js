import React from "react";

export default function Weather(props) {
    const [weatherData, setWeatherData] = React.useState({});

    React.useEffect(()=>{
        let cityName = props.city;
        const apiKey = "323eecb3b884f86eae937878ae160d27";
        const unit = "metric";
    
        const URL = "https://api.openweathermap.org/data/2.5/weather?appid="
            + apiKey + "&q=" + cityName + "&units=" + unit + "";
       
        fetch(URL)
            .then(response => response.json())
            .then(data => setWeatherData(data));
    },[])
    
    return (
        <div className="WeatherComponent">
            <pre>{JSON.stringify(weatherData, null, 2)}</pre>

        </div>
    )
}