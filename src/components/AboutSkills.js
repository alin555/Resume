import React, { useContext, useState } from "react";
import AppContext from "../components/AppContext";

const AboutSkills = () => {

    const pagePosition = useContext(AppContext);
    const [skillsIsDisplay, setSkillsIsDisplay] = useState(false);
    if (pagePosition >= 1000 && !skillsIsDisplay) {
        setSkillsIsDisplay(true);
    }

    return (
        <div id="about-skills">
            <h2 className={skillsIsDisplay ? "slide-anim" : undefined}>- MY SKILLS -</h2>

            <div id="skill-list">
                <img src="images/html-logo.png" className={skillsIsDisplay ? "skills-anim" : undefined} />
                <img src="images/css-logo.png" className={skillsIsDisplay ? "skills-anim" : undefined} />
                <img src="images/javascript-logo.png" className={skillsIsDisplay ? "skills-anim" : undefined} />
                <img src="images/node-logo.png" className={skillsIsDisplay ? "skills-anim" : undefined} />
                <img src="images/react-logo.png" className={skillsIsDisplay ? "skills-anim" : undefined} style={{ width: '70px', height: "70px" }} />
            </div>
        </div>
    )
}
export default AboutSkills;