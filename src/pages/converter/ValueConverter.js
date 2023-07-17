import React, { useState } from "react";
import "./ValueConverterStyles.css";

export default function ValueConverter() {
    const [inputValue, setInputValue] = useState("");
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [convertedValue, setConvertedValue] = useState("");
    const [currencyValues, setCurrencyValues] = useState({
        EUR: 1, 
        USD: 1.18,
        RSD: 117.2232,
    });

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
                USD: 1.18, RSD: 117.2232
            },
            USD: {
                EUR: 0.85, RSD: 104.3950
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

    const handleCurrencyValueChange = (event, currency) => {
        const newCurrencyValues = {
            ...currencyValues,
            [currency]: Number(event.target.value)
        };
        setCurrencyValues(newCurrencyValues);
    };

    return(
        <div className="value-converter">
            <h2 className="value-converter__title">
                Value Converter
            </h2>
            <div className="value-converter__container">
                <input 
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter value"
                    className="container__input"
                />
                <select
                    value={fromCurrency}
                    onChange={handleFromCurrencyChange}
                    className="container__select"
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
                    className="container__select"
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
                <button 
                    onClick={handleConvertClick}
                    className="container__converter-button"
                >
                    Convert
                </button>
            </div>
            {convertedValue && (
                <p className="container__converted-value" >
                    Converted Value: {convertedValue} {toCurrency}
                </p>
            )}
        </div>
    );
}