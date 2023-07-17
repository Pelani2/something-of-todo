import React, { useEffect, useState } from "react";
import "./CalculatorStyles.css";
import OperatingButton from "../../components/buttons/operating-button/OperatingButton";

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
            const result = eval(newExpression);
            if (result !== undefined) {
                setDisplayValue(result.toString());
                setExpression("");
            } else {
                console.error("Invalid expression");
            }
        } catch (error) {
            console.error("Invalid expression");
        }
    }

    const handleClearClick = () => {
        setDisplayValue("0");
        setExpression("");
    }

    const handleKeyDown = (event) => {
        const key = event.key;

        if (!isNaN(key) || key === ".") {
            handleDigitClick(key);
        } else if (key === "+" || key === "-" || key === "*" || key === "/") {
            handleOperatorClick(key);
        } else if (key === "Enter") {
            handleEqualClick();
        } else if (key === "c" || key === "C") {
            handleClearClick();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return(
        <div className="calculator-container">
            <div className="calculator-frame">
                <div className="calculator-display">
                    {displayValue}
                </div>

                <div className="calculator-buttons">
                    <OperatingButton 
                        oprClickFunc={() => handleDigitClick("7")}
                        text="7"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleDigitClick("8")}
                        text="8"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleDigitClick("9")}
                        text="9"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleOperatorClick("+")}
                        text="+"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleDigitClick("4")}
                        text="4"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleDigitClick("5")}
                        text="5"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleDigitClick("6")}
                        text="6"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleOperatorClick("-")}
                        text="-"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleDigitClick("1")}
                        text="1"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleDigitClick("2")}
                        text="2"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleDigitClick("3")}
                        text="3"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleOperatorClick("*")}
                        text="*"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleDigitClick("0")}
                        text="0"
                        />
                    <OperatingButton 
                        oprClickFunc={() => handleOperatorClick("/")}
                        text="/"
                        />
                    <OperatingButton 
                        oprClickFunc={handleEqualClick}
                        text="="
                        />
                    <OperatingButton 
                        oprClickFunc={handleClearClick}
                        text="C"
                    />
                </div>
            </div>
        </div>
    );
}