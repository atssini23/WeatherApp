import React from "react";

//class Weather extends React.Component {
const Weather = props => (
  // render() {
  //return (
  //since we are only returning one div we dont need any of the return and render
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        Location:
        <span className="weather__value">
          {props.city},{props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key">
        Temperature:
        <span className="weather__value"> {props.temperature} ℉</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        Humidity:<span className="weather__value"> {props.humidity}</span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Conditions:<span className="weather__value"> {props.description}</span>
      </p>
    )}
    {props.error && <p className="text-danger"> {props.error}</p>}
  </div>
);
//};
//}

export default Weather;
