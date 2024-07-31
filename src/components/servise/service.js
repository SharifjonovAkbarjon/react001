import React from "react";
import "./service.css"
import rasm from "../assets/interior.png"
import rasm1 from "../assets/architecturre.png"
import rasm2 from "../assets/plannig.png"


function Servise() {
    return (
        <div className="container">
            <div className="service__body">
                <div className="service__text">
                    <p className="servise__paragraph">WHAT WE DO</p>
                    <h3 className="servise__head">Our Service</h3>
                </div>
                <div className="servise__wrapper">
                    <div className="servise__collection">
                        <div className="icons">
                            <img src={rasm} alt="" />
                        </div>
                        <div className="lorem__tect">
                            <p className="lorem__p">Interior Design</p>
                            <p className="lorem__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae dolore illum quod eveniet autem. </p>
                        </div>
                    </div>
                    <div className="servise__collection">
                        <div className="icons">
                            <img src={rasm1} alt="" />
                        </div>
                        <div className="lorem__tect">
                            <p className="lorem__p">Architecture</p>
                            <p className="lorem__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae dolore illum quod eveniet autem. </p>
                        </div>
                    </div>
                    <div className="servise__collection">
                        <div className="icons">
                            <img src={rasm2} alt="" />
                        </div>
                        <div className="lorem__tect">
                            <p className="lorem__p">Planning</p>
                            <p className="lorem__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae dolore illum quod eveniet autem. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servise