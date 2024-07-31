import React from "react";
import "./about.css"
import rasm from "../assets/card.png"
import rasm2 from "../assets/card2.png"

function About() {
    return (
        <div className="container">
            <div className="about__body">
                <div className="about__part1">
                    <div className="part1__image">
                        <img src={rasm} alt="" />
                    </div>
                    <div className="part1__text">
                        <p className="part1__paragrpaph">ABOUT US</p>
                        <h2 className="part1__head">Interioris The Will
                            of An Epoch Mextreo</h2>
                        <span className="part1__there">
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form injected
                            humour, or randomised words which don't look even slightly
                            believable.If you are going to use a passage of Lorem Ipsum,
                            sure there isn't anything embarrassing hidden the middleof text.
                            All the Lorem Ipsum generators on the Internettend to repeat
                            predefined chunks as necessary,making this the first true
                            generator on the Internet.
                        </span>
                        <div className="part1_btns">
                            <button className="part1__btn">LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div className="about__part2">
                    <div className="part2__text">
                        <h1 className="part2__head">20</h1>
                        <h4 className="part2_header">Years Of Successful
                            Working The Market
                        </h4>
                        <button className="part2__btn">Read more</button>
                    </div>
                    <div className="part2__img">
                        <img src={rasm2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default About