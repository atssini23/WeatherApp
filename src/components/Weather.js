import React from "react";

//class Weather extends React.Component {
const Weather = props => (
  // render() {
  //return (
  //since we are only returning one div we dont need any of the return and render
  <div>
    {props.city && props.country && (
      <p>
        Location:{props.city},{props.country}
      </p>
    )}
    {props.temperature && <p>Temperature:{props.temperature}</p>}
    {props.humidity && <p>Humidity:{props.humidity}</p>}
    {props.description && <p>Conditions:{props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);
//};
//}

export default Weather;
