import React from "react";
import WeatherCard from "./WeatherCard";
import { Modal, Box, Typography } from '@mui/material/';

const style = { //modal style
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const apiKey = "323eecb3b884f86eae937878ae160d27";

export default function Weather({ city, resetStates }) {
    const [weatherData, setWeatherData] = React.useState(() => {
        return {
            daily: [],
            city: '',
            country: '',
            state: '',
            fetched: false,
            loader: false,
            error: false,
            errorMsg: ''
        }
    });
    let dailyWeatherWidget;

    // fetch  from API
    React.useEffect(() => {
        let cityName = city.trim();
        cityName = cityName[0].toUpperCase() + cityName.slice(1);
        const unit = "metric";

        const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
        //setLoader before  fetch
        setWeatherData(prev => ({ ...prev, loader: true }));
        async function fetchWeather() {
            try {
                const response = await fetch(URL); //API to get lat & lon
                if (!response.ok) {
                    throw Error('Please Retry')
                }
                const data = await response.json();
                if (data.length === 0) {
                    throw Error('City name not found');
                }
                setWeatherData(prev => ({
                    ...prev,
                    city: data[0].name,
                    country: data[0].country,
                    state: data[0].state
                }))

                const URLOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=` +
                    `${data[0]?.lat}&lon=${data[0]?.lon}&units=${unit}&appid=${apiKey}`
                    + `&exclude=minutely,hourly,alerts`;

                const URLOneCallResponse = await fetch(URLOneCall); //get weekly weather
                if (!URLOneCallResponse.ok) {
                    throw Error('onecall API error');
                }
                const dataURLOneCall = await URLOneCallResponse.json();

                setWeatherData(prev => ({
                    ...prev,
                    daily: dataURLOneCall.daily,
                    fetched: true,
                    loader: false
                }));

            } catch (err) {
                setWeatherData(prev => ({ ...prev, error: true, errorMsg: err.message }))
            }
        }
        fetchWeather();

    }, [city])

    if (weatherData.fetched) {
        dailyWeatherWidget = weatherData.daily.map((item) => {
            return (<WeatherCard
                key={item.dt}
                date={item.dt}
                fetched={weatherData.fetched}
                icon={item.weather[0].icon}
                cityName={`${weatherData.city},
                 ${weatherData.state}, ${weatherData.country}`}
                description={item.weather[0].description}
                max_temp={item.temp.max}
                min_temp={item.temp.min}
            />)
        });
    }

    return (
        <div className="weather-container">
            <Modal
                open={weatherData.error}
                onClose={resetStates}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Oops!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {weatherData.errorMsg}
                    </Typography>
                </Box>
            </Modal>
            {weatherData.loader && <div className="loader"></div>}
            {!weatherData.loader && dailyWeatherWidget}
        </div>
    )
}