import React from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import Input from "./components/Input";
import "./App.css";

function App() {

  const [formData, setFormData] = React.useState(() => "");
  const [city, setCity] = React.useState(() => { return { cityName: "", showWeather: false } });

  function resetStates() {
    setFormData("");
    setCity({ cityName: "", showWeather: false });
  }
  function handleNavLogoClick() {
    console.log("clicked");
    setCity({ cityName: "", showWeather: false });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setCity(() => { return { cityName: formData, showWeather: true } });
  }

  function handleChange(event) {
    setFormData(() => event.target.value);
  }

  return (
    <>
      <Navbar
        handleClick={handleNavLogoClick}
        showWeather={city.showWeather}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {!city.showWeather && <Input
        showWeather={city.showWeather}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />}

      {city.showWeather && <Weather city={city.cityName} resetStates={resetStates}/>}
    </>
  );
}

export default App;