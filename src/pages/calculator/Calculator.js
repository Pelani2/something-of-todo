import React, { useState } from "react";
import "./CalculatorStyles.css";

export default function Calculator() {
    const [displayValue, setDisplayValue] = useState("0");
    const [expression, setExpression] = useState("");

    const handleDigitClick = (digit) => {
        setDisplayValue((prevDisplayValue) => prevDisplayValue === "0" ? digit : prevDisplayValue + digit);
    }

    const handleOperatorClick = (operator) => {
        setExpression((prevExpression) => prevExpression + displayValue + operator);
        setDisplayValue("0");
    }

    return(
        <div className="calculator-container">

        </div>
    );
}