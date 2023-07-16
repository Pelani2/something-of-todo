import React from "react";
import "../navbar/NavbarStyles.css";
import LoginAndSignupButton from "../buttons/login-and-signup/LoginAndSignupButton";

export default function Navbar() {
    return(
        <nav>
            <ul>
                <li>
                    Home    
                </li>
                <li>
                    About
                </li>
                <li>
                    Services
                </li>
                <li>
                    Contact
                </li>
            </ul>
            <div>
                <LoginAndSignupButton text="Log In" />
                <LoginAndSignupButton text="Sign Up" />
            </div>
        </nav>
    );
}