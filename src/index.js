import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// concurrent mode ... works only with experimental react and reactDOM
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
