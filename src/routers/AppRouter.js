import React from 'react';
import { BrowserRouter, Link, Switch, NavLink, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const AppRouter = () => (
  <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

      </Switch>
  </BrowserRouter>
)

export default AppRouter;
