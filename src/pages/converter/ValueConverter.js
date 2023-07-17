import React, { useState } from "react";
import "./ValueConverterStyles.css";

export default function ValueConverter() {
    const [inputValue, setInputValue] = useState("");
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [convertedValue, setConvertedValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    };

    const convertCurrency = (amount, from, to) => {
        const conversionRates = {
            EUR: {
                USD: 1.18, RSD: 117.38
            },
            USD: {
                EUR: 0.85, RSD: 99.61
            },
            RSD: {
                EUR: 0.0085, USD: 0.01
            },
        };

        const convertedAmount = amount * conversionRates[from][to];
        return convertedAmount;
    };

    const handleConvertClick = () => {
        // convert the value based on the selected currencies
        const convertedAmount = convertCurrency(inputValue, fromCurrency, toCurrency);
        setConvertedValue(convertedAmount.toFixed(2));
    }

    return(
        <div className="value-converter">
            <h2>
                Value Converter
            </h2>
            <div className="value-converter__container">
                <input 
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter value"
                />
                <select
                    value={fromCurrency}
                    onChange={handleFromCurrencyChange}
                >
                    <option value="EUR"> 
                        EUR
                    </option>
                    <option value="USD">
                        USD
                    </option>
                    <option value="RSD">
                        RSD
                    </option>
                </select>
                <span className="container__arrow">
                    &#x2192;
                </span>
                <select 
                    value={toCurrency}
                    onChange={handleToCurrencyChange}
                >
                    <option value="EUR">
                        EUR
                    </option>
                    <option value="USD">
                        USD
                    </option>
                    <option value="RSD">
                        RSD
                    </option>
                </select>
                <button onClick={handleConvertClick}>
                    Convert
                </button>
            </div>
            {convertedValue && (
                <p>
                    Converted Value: {convertedValue} {toCurrency}
                </p>
            )}
        </div>
    );
}