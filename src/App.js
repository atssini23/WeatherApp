import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./styles.css";
//import ReactDOM from "react-dom";

const API_KEY = "494f238602ea502b5f5e150131a29438";

export default function App() {
  getWeather = async () => {
    const api_call = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Seattle"
    );
    const data = await api_call.json();
    console.log(data);
  };

  return (
    <div className="App">
      <Titles />
      <Form />
      <Weather />
    </div>
  );
}
