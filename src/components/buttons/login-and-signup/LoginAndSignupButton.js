import React from "react";
import "./LoginAndSignupButton.css";

export default function LoginAndSignupButton({
    text
}) {
    return(
        <button className="login-signup-button" >
            {text}
        </button>
    )
}