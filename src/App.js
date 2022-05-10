import React from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Weather from "./components/Weather"



function App() {

  const [formData, setFormData] = React.useState({input: "", weather: false,});
  

  function handleSubmit(event) {
    event.preventDefault()

    // console.log(formData);
    setFormData((prev)=> {
      return {
        ...prev,
        weather: true,
      }
    })

  }

  function handleChange(event) {
    setFormData((prev) => {return {...prev, input: [event.target.value]}})
  }

  return (
    <>
      <Navbar />
      <Main
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={formData.input}
      />
      {formData.weather && <Weather city={formData.input}/>}
    </>
  );
}

export default App;