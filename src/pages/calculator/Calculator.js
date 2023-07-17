import React, { useEffect, useRef, useState } from "react";
import "./CalculatorStyles.css";
import OperatingButton from "../../components/buttons/operating-button/OperatingButton";
import { evaluate } from "mathjs";

export default function Calculator() {
    const [displayValue, setDisplayValue] = useState("0");
    const [expression, setExpression] = useState("");
    const displayRef = useRef(null);

    const handleDigitClick = (digit) => {
        setDisplayValue((prevDisplayValue) => prevDisplayValue === "0" ? digit : prevDisplayValue + digit);
    }

    const handleOperatorClick = (operator) => {
        if (displayValue !== "0") {
            setExpression((prevExpression) => prevExpression + displayValue + operator);
            setDisplayValue("0");
        } else if (expression !== "") {
            setExpression((prevExpression) => prevExpression.slice(0, 1) + operator);
        }
    }

    const handleEqualClick = () => {
        try {
            const newExpression = expression + displayValue;
            const result = evaluate(newExpression);
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

    return(
        <div className="calculator-container">
            <div className="calculator-frame">

                <div 
                    className="calculator-display"
                    tabIndex={0}
                    ref={displayRef}
                >
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