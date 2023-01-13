import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://t.me/Kseniia_Tsyplakova"
            target="_blank"
            className="text-decoration-none"
          >
            Kseniia Tsyplakova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KseniiaTsyplakova/react-weather-application"
            target="_blank"
            className="text-decoration-none"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://teal-mochi-64eb5d.netlify.app/"
            target="_blank"
            className="text-decoration-none"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
