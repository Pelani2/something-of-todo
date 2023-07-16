import React from "react";
import "../navbar/NavbarStyles.css";
import LoginAndSignupButton from "../buttons/login-and-signup/LoginAndSignupButton";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar">
            <ul className="navbar__links">
                <li>
                    <Link to="/">
                        Home
                    </Link>  
                </li>
                <li>
                    <Link to="/contactpage" >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/servicespage" >
                        Services
                    </Link>     
                </li>
                <li>
                    <Link to="/aboutpage" >
                        About
                    </Link>
                </li>
            </ul>
            <div className="navbar__buttons">
                <LoginAndSignupButton text="Log In" />
                <LoginAndSignupButton text="Sign Up" />
            </div>
        </nav>
    );
}