import React from "react";
import "./footer.css"

function Footer() {
    return (
        <div className="container">
            <div className="footer__body">
                <p className="footer_p">DON’T FORGET TO SIGN UP</p>
                <hr />
                <span className="footer__span">Find out early about all upcoming promotions and new product releases with
                    our newsletter.</span>
                <div className="footer__btns">
                    <input type="text" placeholder="Enter your email address....." />
                    <button className="foote__btn">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default Footer