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

    const handleEqualClick = () => {
        const newExpression = expression + displayValue;
        try {
            // evaluate the expression
            const result = eval(newExpression);
            setDisplayValue(result.toString());
            setExpression("");
        } catch (error) {
            console.error("Invalid expression");
        }
    }

    const handleClearClick = () => {
        setDisplayValue("0");
        setExpression("");
    }

    return(
        <div className="calculator-container">
            <div className="calculator-display">
                {displayValue}
            </div>

            <div className="calculator-buttons">
                
            </div>
        </div>
    );
}