import React from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"




function App() {

  const [formData, setFormData] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault()

    console.log(formData);
  }

  function handleChange(event) {
    setFormData(() => event.target.value )
  }

  return (
    <>
      <Navbar />
      <Main
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;