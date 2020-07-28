import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
    const [projectName, setProjectName] = useState(undefined);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState("");

    return (
        <div id="projects">
            <h1 className="title">- PROJECTS -</h1>

            <div id="projects-container">
                <div id="external-proj">
                    <h2>- External Projects -</h2>
                    <img src="images/tikunei-eihut.png" className="example-proj" onClick={() => {
                                setProjectName("Tikunei-Eihut");
                                setModalIsOpen(true);
                                setImgSrc("images/tikunei-eihut.png");

                    }}></img>
                    <img src="images/tikunei-eihut.png" className="example-proj" onClick={() => {
                                setProjectName("Tikunei-Eihut");
                                setModalIsOpen(true);
                                setImgSrc("images/tikunei-eihut.png");
                    }}></img>
                    <img src="images/tikunei-eihut.png" className="example-proj" onClick={() => {
                                setProjectName("Tikunei-Eihut");
                                setModalIsOpen(true);
                                setImgSrc("images/tikunei-eihut.png");
                    }}></img>
                </div>

                <div id="personal-proj">
                    <h2>- Self Projects -</h2>
                    <img src="images/casino.png" className="example-proj" onClick={() => {
                                setProjectName("Casino");
                                setModalIsOpen(true);
                                setImgSrc("images/casino.png");
                    }}></img>
                    <img src="images/chat.png" className="example-proj" onClick={() => {
                                setProjectName("Chat");
                                setModalIsOpen(true);
                                setImgSrc("images/chat.png");
                    }}></img>
                    <img src="images/agar.png" className="example-proj" onClick={() => {
                                setProjectName("Agar");
                                setModalIsOpen(true);
                                setImgSrc("images/agar.png");

                    }}></img>
                </div>

                <ProjectModal 
                projectName={projectName} 
                setModalIsOpen={setModalIsOpen} 
                modalIsOpen={modalIsOpen}
                imgSrc={imgSrc}
                />
            </div>
        </div>
    )
}

export default Projects;