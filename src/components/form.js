import React from "react";
import "../styles/form.scss";

const Form = () => {
  const [parameters, setParameters] = React.useState({});

  return (
    <div className="form-box">
      <form>
        <input type="text" placeholder="interval"></input>
      </form>
    </div>
  );
};

export default Form;
