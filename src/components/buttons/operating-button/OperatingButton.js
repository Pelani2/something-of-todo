import React from "react";
import "./OperatingButtonStyles.css";

export default function OperatingButton({
    oprClickFunc, text
}) {
    return(
        <button 
            onClick={oprClickFunc} 
            className="operating-button"
        >
            {text}
        </button>
    );
}