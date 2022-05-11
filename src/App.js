import React from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";



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

      <div className={(!city.showWeather) ? "Input-box" : ""}>
        <form className={(!city.showWeather) ? "form-input form-input-shadow" : "form-input"}
          onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={handleChange}
            value={formData}
          />
          <button>Submit</button>
        </form>
      </div>

      {city.showWeather && <Weather city={city.cityName}/> }
    </>
  );
}

export default App;