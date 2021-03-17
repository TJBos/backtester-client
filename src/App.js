import "./App.scss";
import Header from "./components/header";
import Chart from "./components/chart";
import Form from "./components/form";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Chart />
        <Form />
      </div>
    </div>
  );
}

export default App;
