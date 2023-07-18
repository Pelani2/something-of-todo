import React from "react";
import "./FooterSectionStyles.css";
import Facebook from "../../../assets/images/social-media/facebook-logo.png";
import Instagram from "../../../assets/images/social-media/instagram-logo.png";
import Twitter from "../../../assets/images/social-media/twitter-logo.png";

export default function FooterSection() {
    return(
        <footer className="footer-section">
            <div className="footer-section__container"> 
                <h3 className="footer-section__title">
                    Related Links
                </h3>
                <ul className="footer-section__list">
                    <li>
                        <a href="/termsofservice">
                            Terms Of Service
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-section__container">
                <h3 className="footer-section__title">
                    Social Media
                </h3>
                <div className="footer-section__social-links">
                    <a href="https://www.facebook.com">
                        
                    </a>
                    <a href="https://www.instagram.com">
                        
                    </a>
                    <a href="https://www.twitter.com">
                        
                    </a>
                </div>
            </div>
        </footer>
    );
}