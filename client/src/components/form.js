import React from "react";
import "../styles/form.scss";

const Form = () => {
  const [parameters, setParameters] = React.useState({});

  const URL = "http://localhost:5000/add";

  const handleChange = (event) => {
    setParameters({ ...parameters, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parameters),
    });
  };

  const show = (type) => {
    if (type === "buy") {
      return parameters.$buyIndicator2 === "Number" ? "number" : "hidden";
    } else if (type === "sell") {
      return parameters.sellIndicator2 === "Number" ? "number" : "hidden";
    }
  };

  return (
    <div className="form-box">
      <h1>Stack your strategy</h1>
      <form onSubmit={handleSubmit}>
        <label for="interval">Interval:</label>
        <select
          id="interval"
          name="interval"
          className="selection"
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select interval
          </option>
          <option value="1D">1D</option>
          <option value="4H">4H</option>
          <option value="1H">1H</option>
          <option value="1M">1M</option>
        </select>
        <br></br>
        <label for="buy-signal">Buy signal:</label> Buy when:
        <select
          id="buy-signal"
          name="buyIndicator1"
          className="selection"
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select option
          </option>
          <option value="RSI">RSI</option>
          <option value="EMA20">EMA20</option>
          <option value="Price">Price</option>
          <option value="EMA50">EMA50</option>
        </select>
        <select
          id="buy-signal"
          name="buyAction"
          className="selection"
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select action
          </option>
          <option value="smaller">is smaller than</option>
          <option value="larger">is larger than</option>
        </select>{" "}
        <select
          id="buy-signal"
          name="buyIndicator2"
          className="selection"
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select option
          </option>
          <option value="RSI">RSI</option>
          <option value="EMA20">EMA20</option>
          <option value="Price">Price</option>
          <option value="Number">A number</option>
        </select>
        <input
          type={show("buy")}
          className="selection"
          name="buyNumberEntered"
          placeholder="which number?"
          onChange={handleChange}
        ></input>
        <br></br>
        <label for="sell-signal">Sell signal:</label> Sell when:
        <select
          id="sell-signal"
          name="sellIndicator1"
          className="selection"
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select option
          </option>
          <option value="RSI">RSI</option>
          <option value="EMA20">MACD</option>
          <option value="Price">Price</option>
          <option value="EMA50">1M</option>
        </select>
        <select
          id="sell-signal"
          name="sellAction"
          className="selection"
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select action
          </option>
          <option value="smaller">Is smaller than</option>
          <option value="larger">Is larger than</option>
        </select>{" "}
        <select
          id="sell-signal"
          name="sellIndicator2"
          className="selection"
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select option
          </option>
          <option value="RSI">RSI</option>
          <option value="EMA20">EMA20</option>
          <option value="Price">Price</option>
          <option value="Number">A number</option>
        </select>
        <input
          type={show("sell")}
          className="selection"
          name="sellNumberEntered"
          placeholder="which number?"
          onChange={handleChange}
        ></input>
        <br></br>
        <button id="sub-button" type="submit">
          Compose!
        </button>
      </form>
    </div>
  );
};
//just coding my life away

export default Form;
