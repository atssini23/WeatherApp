import React from "react";

//class Form extends React.Component {
const Form = props => (
  //render() {
  //return (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Get Weather</button>
  </form>
);
//}
//}

export default Form;
