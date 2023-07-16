import React from "react";
import "../navbar/NavbarStyles.css";
import LoginAndSignupButton from "../buttons/login-and-signup/LoginAndSignupButton";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/icons/logo.png";

export default function Navbar() {
    return(
        <nav className="navbar">
            <img 
                src={Logo}
                alt="navbarlogo"
                className="navbar__logo"
            />
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
                <LoginAndSignupButton 
                    text="Log In"
                    className="login-signup-button"
                />
                <LoginAndSignupButton 
                    text="Sign Up" 
                    className="login-signup-button"
                />
            </div>
        </nav>
    );
}