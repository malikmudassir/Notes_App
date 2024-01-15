import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/store";
import { Provider } from "react-redux";

// Create a React root and render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Wrap the entire application in a <React.StrictMode> component for development checks
  <React.StrictMode>
    {/*  Provide the Redux store to the application */}
    <Provider store={store}>
      {/*  Render the main application component */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
