import React, { useContext, useState } from "react";
import AppContext from "../components/AppContext";

const AboutMe = () => {

    const pagePosition = useContext(AppContext);
    const [imgIsDisplay, setImgIsDisplay] = useState(false);
    if (pagePosition >= 843 && !imgIsDisplay) {
        setImgIsDisplay(true);
    }

    return (
        <div id="about-me">
            <img src="images/alon-img.png" className={imgIsDisplay ? "img-roll" : undefined} />
            <h2>Who am I..?</h2>
            <p>
                I'm a Full-stack developer, new experiences and challanges are my thing, if you have any cool projects or opportunities
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                <a href="#contact">GET IN TOUCH!</a>
            </p>
        </div>
    )
}

export default AboutMe;