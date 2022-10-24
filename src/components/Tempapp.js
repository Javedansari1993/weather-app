import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("delhi");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=91226dcd67968a4f6433822b1fa584ae`;
      const response = await fetch(url);
      // console.log(response)
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="inputData">
            <input
              type="search"
              value={search}
              className="inputField"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          {!city ? (
            <p> No Data Found </p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <i className="fa-solid fa-street-view"></i>
                  {search}
                </h2>
                <h1 className="temp">{city.temp}</h1>
                <h3 className="tempmin_max"> Min : {city.temp_min}℃el | Max : {city.temp_max}℃el</h3>
              </div>
              <div className="wave1"></div>
              <div className="wave2"></div>
              <div className="wave3"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tempapp;
