import React from "react";
import "./CalculatorButtonStyles.css";
import { Link } from "react-router-dom";

export default function CalculatorButton({
    text
}) {
    return(
        <Link 
            to="/calculatorpage"
            className="calculator-button" 
        >
            {text}
        </Link>
    );
}