import React from "react";
import "./Blog.css"
import rasm from "../assets/blog.png"
import rasm2 from "../assets/blog2.png"


function Blog(){
    return(
        <div className="blog">
            <div className="container">
                <div className="blog__body">
                    <div className="blog__title">
                        <p className="blog__p">LETEST NEWS</p>
                        <h2 className="blog__h2">From Our Blog</h2>
                    </div>
                    <div className="blog__wrapper">
                        <div className="blog__collection">
                            <img src={rasm} alt="" />
                            <h3 className="blog__h3">2020 Interior Design Trends</h3>
                            <p className="testi__parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            incididunt ut labore et dolore magna aliqua.</p>
                            <button className="blog__btn">CONTINUE READING....</button>
                        </div>
                        <div className="blog__collection">
                            <img src={rasm} alt="" />
                            <h3 className="blog__h3">28 Notable Product at ARC Interior Design</h3>
                            <p className="testi__parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            incididunt ut labore et dolore magna aliqua.</p>
                            <button className="blog__btn">CONTINUE READING....</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog