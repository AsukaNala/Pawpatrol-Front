import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./css/index.css";
import { AuthProvider } from "./context/AuthContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MissingPetProvider } from "./context/MissingPetContext.jsx";
import { FoundPetProvider } from "./context/FoundPetContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MissingPetProvider>
          <FoundPetProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <App />
            </LocalizationProvider>
          </FoundPetProvider>
        </MissingPetProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
