import React from "react";
import "./header.css"
import rasm from "../assets/logo.png"


function Header(){
    return(
        <div className="container">
            <div className="header__body">
                <div className="logo">
                    <img src={rasm} alt="" />
                </div>
                <div className="header">
                    <ul>
                        <li>HOME</li>
                        <li>PROJECT</li>
                        <li>SERVICES</li>
                        <li>ABOUT</li>
                        <li>BLOG</li>
                        <li>SHOP</li>
                        <li>CONTACT</li>
                    </ul>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>

    )
}

export default Header