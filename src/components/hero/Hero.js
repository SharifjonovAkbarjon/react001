import React from "react";
import "./hero.css"
import rasm from "../assets/hero.png"


function Hero(){
    return(
        <div className="container">
            <div className="hero__body">
                <div className="hero__title">
                    <div className="hero__heading">
                        <p className="hero__paragraph">MODERN INTERIOR</p>
                        <h2>Create Your
                        Interior Design.</h2>
                        <span className="span">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, neque sint! Accusantium temporibus totam molestiae earum vitae nesciunt, officia laborum quidem voluptatum nostrum repellat consequuntur eveniet sint.</span>
                    </div>
                    <div className="hero__btn">
                        <button className="hero__btns">CONTACT</button>
                    </div>
                </div>
                <div className="hero__img">
                    <img src={rasm} alt="" />
                </div>
            </div>
        </div>
    )
}

export  default Hero