import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./index.css";
import "./App.css";
// import Header from "./components/Header";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

const App = () => {
  return (
    <BrowserRouter>
   {/* wrapping app in Header was causing problems; need to revisit later */}
      {/* <Header> */}
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/upload" element={<Upload />} />
      </Routes>
      {/* </Header> */}
    </BrowserRouter>
  );
};

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
