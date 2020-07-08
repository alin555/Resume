import React from "react";
import AboutSkills from "./AboutSkills";
import AboutMe from "./AboutMe";
import AboutIcons from "./AboutIcons";

const About = () => {

    return (
        <div id="about">
            <h1 className="title">- ABOUT -</h1>
            <AboutIcons />
            <div id="about-list">
                <AboutMe />
                <AboutSkills />
            </div>
        </div>
    )
}
export default About;