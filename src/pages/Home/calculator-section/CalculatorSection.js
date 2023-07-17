import React from "react";
import "./CalculatorSectionStyles.css";
import CalculatorButton from "../../../components/buttons/calculator/CalculatorButton";

export default function CalculatorSection() {
    return(
        <div>
            <CalculatorButton text="Take me to Calculator" />
        </div>
    );
}