import React from "react";

const Projects = () => (
    <div id="projects">
        <h1 className="title">- PROJECTS -</h1>

        <div id="projects-container">
            
            <div id="external-proj">
                <h2>- External Projects -</h2>
                <img src="images/tikunei-eihut.png" className="example-proj"></img>
                <img src="images/tikunei-eihut.png" className="example-proj"></img>
                <img src="images/tikunei-eihut.png" className="example-proj"></img>
            </div>

            <div id="personal-proj">
                <h2>- Self Projects -</h2>
                <img src="images/casino.png" className="example-proj"></img>
                <img src="images/chat.png" className="example-proj"></img>
                <img src="images/agar.png" className="example-proj"></img>
            </div>
        </div>
    </div>
)

export default Projects;