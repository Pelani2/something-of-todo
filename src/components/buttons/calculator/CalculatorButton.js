import React from "react";
import "./CalculatorButtonStyles.css";
import { Link } from "react-router-dom";

export default function CalculatorButton({
    text, toProp
}) {
    return(
        <Link 
            to={toProp}
            className="calculator-button" 
        >
            {text}
        </Link>
    );
}