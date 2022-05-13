import React from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import Input from "./components/Input";

function App() {

  const [formData, setFormData] = React.useState("");
  const [city, setCity] = React.useState({ cityName: "", showWeather: false });

  function handleSubmit(event) {
    event.preventDefault()

    setCity({ cityName: formData, showWeather: true })
  }

  function handleChange(event) {
    setFormData(() => event.target.value)
  }

  return (
    <>
      <Navbar />
      { !city.showWeather && <Input
        showWeather={city.showWeather}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />}
      {city.showWeather && <Weather city={city.cityName} />}
    </>
  );
}

export default App;