import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-secondary" />
          </div>
        </div>
      </form>
      <h1>Tbilisi</h1>
      <ul>
        <li>Friday 12:00</li>
        <li>Light Snow</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow_light.png"
            alt="Light Snow"
          />
          -2°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 86%</li>
            <li>Wind: 0 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
