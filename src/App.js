import React from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import Input from "./components/Input";
import "./App.css";

export default function App() {

  const [formData, setFormData] = React.useState(() => "");
  const [city, setCity] = React.useState(() => { return { cityName: "", showWeather: false } });

  function resetStates() {
    setFormData("");
    setCity({ cityName: "", showWeather: false });
  }

  function handleNavLogoClick() { //reset states
    resetStates();
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(formData.trim() === ''){
      return
    }
    setCity(() => ({ cityName: formData, showWeather: true }));
  }

  function handleChange(event) { //input data from form
    setFormData(() => event.target.value);
  }

  return (
    <main>
      <Navbar
        handleClick={handleNavLogoClick}
        showWeather={city.showWeather}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={formData}
      />

      {!city.showWeather && <Input
        showWeather={city.showWeather}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />}

      {city.showWeather && <Weather city={city.cityName} resetStates={resetStates} />}
    </main>
  );
}