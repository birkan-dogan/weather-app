import React from "react";

const WeatherCard = ({ data }) => {
  const { name, main, sys, weather, iconUrl } = data;
  return (
    <li className="city">
      <h2 className="city-name">
        <span>{name}</span>
        <sup>{sys.country}</sup>
      </h2>
      <div className="city-temp">
        {Math.round(main.temp)}
        <sup>°C</sup>
      </div>
      <figure>
        <img src={iconUrl} alt="city-icon" className="city-icon" />
        <figcaption>{weather[0].description}</figcaption>
      </figure>
    </li>
  );
};

export default WeatherCard;
