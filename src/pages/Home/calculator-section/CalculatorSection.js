import React from "react";
import "./CalculatorSectionStyles.css";
import CalculatorButton from "../../../components/buttons/calculator/CalculatorButton";

export default function CalculatorSection() {
    return(
        <div className="calculator-section" >
            <p>
                Welcome to our site with random things put in here just to make it work. It's not much but it's something (going to be something). Try to have fun.
            </p>
            <div className="calculator-section__buttons">   
                <CalculatorButton 
                    text="Calculator" 
                    toProp="/calculatorpage"
                />
                <CalculatorButton 
                    text="Value Converter" 
                    toProp="/converterpage"
                />
            </div>
        </div>
    );
}