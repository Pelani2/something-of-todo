import React from "react";
import "../Home/HomeStyles.css";
import Navbar from "../../components/navbar/Navbar";
import CalculatorSection from "./calculator-section/CalculatorSection";

export default function Home() {
    return(
        <div>
            <Navbar />
            <CalculatorSection />
        </div>
    );
}