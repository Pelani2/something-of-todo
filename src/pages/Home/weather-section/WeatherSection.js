import React, { useEffect } from "react";
import "./WeatherSectionStyles.css";
import axios from "axios";
import { useState } from "react";

export default function WeatherSection() {
    const [weatherData, setWeatherData] = useState(null);
    const [dailyWeatherData, setDailyWeatherData] = useState(null);
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const currentTimeString = date.toLocaleTimeString();
            setCurrentTime(currentTimeString);
        };

        // update time initially
        updateTime();
        
        // update the time every second
        const interval = setInterval(updateTime, 1000);

        // cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    async function fetchWeatherData() {
        try {
            const response = await axios.get(
                "https://api.open-meteo.com/v1/forecast?latitude=45.2517&longitude=19.8369&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,showers,visibility,vapor_pressure_deficit,windspeed_10m,winddirection_10m,soil_temperature_0cm,soil_moisture_0_1cm"
            );
            const data = response.data;
            setWeatherData(data);
        } catch (error) {
            console.error(
                `Error fetching weather data: ${error}`,
            );
        }

        try {
            const hourlyResponse = await axios.get(
                "https://api.open-meteo.com/v1/forecast?latitude=45.2517&longitude=19.8369&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=auto&start_date=2023-07-18&end_date=2023-07-31"
            );
            const dailyData = hourlyResponse.data;
            setDailyWeatherData(dailyData);

            console.log(dailyData);
        } catch(error) {
            console.error(
                `Error fetching weather data: ${error}`
            );
        }
    }

    React.useEffect(() => {
        fetchWeatherData();
    }, []);

    const formatTime = (time) => {
        const date = new Date(time);
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    };

    return(
        <div className="weather-section">
            <h2 className="weather-section__title">
                Weather Information
            </h2>
            <div className="weather-section__divider">
                <h3 className="divider__title">
                    Hourly
                </h3>
                {weatherData ? (
                    <div className="divider__weather-info">
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
                            Time: {formatTime(weatherData.hourly.time[0])}
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
                    <p className="weather-info__loading-data">
                        Loading weather data
                    </p>
                )}
            </div>
            <div className="weather-section__divider">
                <h3 className="divider__title">
                    Daily
                </h3>
                {dailyWeatherData ? (
                    <div className="divider__weather-info">
                        <p>
                            Sunrise: {formatTime(dailyWeatherData.daily.sunrise[0])}
                        </p>
                        <p>
                            Sunset: {formatTime(dailyWeatherData.daily.sunset[0])}
                        </p>
                        <p>
                            Max Temperature: {dailyWeatherData.daily.temperature_2m_max[0]} °C
                        </p>
                        <p>
                            Min Temperature: {dailyWeatherData.daily.temperature_2m_min[0]} °C
                        </p>
                        <p>
                            Time: {currentTime}
                        </p>
                        <p>
                            Dominant Wind Direction: {dailyWeatherData.daily.winddirection_10m_dominant[0]} °
                        </p>
                        <p>
                            Wind Gusts: {dailyWeatherData.daily.windgusts_10m_max[0]} km/h
                        </p>
                        <p>
                            Wind Speed: {dailyWeatherData.daily.windspeed_10m_max[0]} km/h
                        </p>
                    </div>
                ) : (
                    <p className="weather-info__loading-data">
                        Loading weather data...
                    </p>
                )}
            </div>
        </div>
    );
}