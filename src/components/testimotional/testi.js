import React from "react";
import "./testi.css"

function Testimotional() {
    return (
        <div className="container">
            <div className="testi__body">
                <div className="testi__tect">
                    <p className="test__p">TESTIMONIALS</p>
                    <h2 className="testi__h2">Client says about us</h2>
                </div>
                <div className="testi__wrapper">
                    <div className="test__collection">
                        <h3 className="testi__h3">Louis Saville <span className="testi_span">/CEO at Google inc</span></h3>
                        <p className="testi__parag">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.</p>
                    </div>
                    <div className="test__collection">
                        <h3 className="testi__h3">Rekha Varadwaz <span className="testi_span">/Manager at Nike inc</span></h3>
                        <p className="testi__parag">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Testimotional