import "./App.css";
import Home from "./components/Home";
import Wait from "./components/Wait";
import Dashboard from "./components/Dashboard";
import Server from "./components/Server";
import Analysis from "./components/Analysis";
import Parameters from "./components/Parameters";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tuning" element={<Parameters />} />
          <Route path="/wait" element={<Wait />} />
          <Route path="/dashboard/analysis" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
