import React, {useState, useContext} from "react";
import AppContext from "./AppContext";

const NavBar = () => {

    const PagePosition = useContext(AppContext);
    return (
        <div id="nav-bar" className={PagePosition >= 543 ? "nav-anim" : undefined}>
            <a href="#home" className={PagePosition < 543 ? "active" : undefined}>Home</a>
            <a href="#about" className={PagePosition > 543 && PagePosition < 1547 ? "active" : undefined}>About</a>
            <a href="#projects" className={PagePosition > 1547 && PagePosition < 2200 ? "active" : undefined}>Projects</a>
            <a href="#contact" className={PagePosition > 2200 ? "active" : undefined}>Contact</a>
        </div>
    )
}


export default NavBar;