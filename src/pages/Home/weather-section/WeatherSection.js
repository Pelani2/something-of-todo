import React from "react";
import "./WeatherSectionStyles.css";
import axios from "axios";
import { useState } from "react";

export default function WeatherSection() {
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData() {
        try {
            const response = await axios.get(
                "https://api.open-meteo.com/v1/forecast?latitude=45.2517&longitude=19.8369&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,showers,visibility,vapor_pressure_deficit,windspeed_10m,winddirection_10m,soil_temperature_0cm,soil_moisture_0_1cm"
            );
            const data = response.data;
            setWeatherData(data);

            console.log(response.data);
        } catch (error) {
            console.error(
                `Error fetching weather data: ${error}`,
            );
        }
    }

    React.useEffect(() => {
        fetchWeatherData();
    }, []);

    return(
        <div>
            <h2>
                Weather Information
            </h2>
            {weatherData ? (
                <div>
                    <p>
                        Temperature: {weatherData.hourly.temperature_2m[0]}°C
                    </p>
                    <p>
                        Apparent Temperature: {weatherData.hourly.apparent_temperature[0]}
                    </p>
                    <p>
                        Relative Humidity: {weatherData.hourly.relativehumidity_2m[0]}%
                    </p>
                    {weatherData.hourly.showers[0] === 0 ? <p> Showers: No showers </p> : <p> Showers: {weatherData.hourly.showers[0]} </p>}
                    <p>
                        Soil Moisture: {weatherData.hourly.soil_moisture_0_1cm[0]} m³/m³
                    </p>
                    <p>
                        Soil Temperature: {weatherData.hourly.soil_temperature_0cm[0]} °C
                    </p>
                    <p>
                        Time: {weatherData.hourly.time[0]}
                    </p>
                    <p>
                        Vapor Pressure Deficit: {weatherData.hourly.vapor_pressure_deficit[0]} kPa
                    </p>
                    <p>
                        Visibility: {weatherData.hourly.visibility[0]} m
                    </p>
                    <p>
                        Wind Direction: {weatherData.hourly.winddirection_10m[0]} °
                    </p>
                    <p>
                        Wind Speed: {weatherData.hourly.windspeed_10m[0]} km/h
                    </p>
                </div>
            ) : (
                <p>
                    Loading weather data
                </p>
            )}
        </div>
    );
}