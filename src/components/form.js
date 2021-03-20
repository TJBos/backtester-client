import React from "react";
import "../styles/form.scss";

const Form = () => {
  const [parameters, setParameters] = React.useState({});

  const handleChange = (event) => {
    setParameters({ ...parameters, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-box">
      <form>
        <label for="interval">Interval:</label>
        <select id="interval" name="interval" onChange={handleChange}>
          <option value="1D">1D</option>
          <option value="4H">4H</option>
          <option value="1H">1H</option>
          <option value="1M">1M</option>
        </select>
        <br></br>
        <label for="indicator">Indicator:</label>
        <select id="indicator" name="indicator" onChange={handleChange}>
          <option value="" disabled selected>
            Select indicator
          </option>
          <option value="RSI">RSI</option>
          <option value="MACD">MACD</option>
          <option value="Price">Price</option>
          <option value="1M">1M</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
