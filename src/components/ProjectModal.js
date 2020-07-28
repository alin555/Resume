import React, { useState } from "react";
import Modal from "react-modal";
import style from "../styles/modal-style.css"

Modal.setAppElement("#root");

const ProjectModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div>
            <Modal
                isOpen={props.modalIsOpen}
                contentLabel="Project info"
                style={style}
            >
                <h1>{props.projectName}</h1>
                <img src={props.imgSrc} id="modal-img"></img>
                <button onClick={() => {
                    setModalIsOpen(false)
                    props.setModalIsOpen(false);
                }}>Close</button>
                <button onClick={() => {
                    window.open("http://www.w3schools.com")
                }}>Go to website</button>
            </Modal>
        </div>
    )
}



export default ProjectModal;