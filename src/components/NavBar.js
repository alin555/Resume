import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => (
    <div>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/about" activeClassName="is-active">about</NavLink>
        <NavLink to="/projects" activeClassName="is-active">projects</NavLink>
        <NavLink to="/contact" activeClassName="is-active">contact-me</NavLink>
        <a href="https://srv-file20.gofile.io/download/vSnrbX/Alon%20Zrihen%20Resume.pdf" download>my-resume</a>
    </div>
)


export default NavBar;