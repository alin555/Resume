import React, { useState } from 'react';
import Home from "../components/Home";
import About from "../components/About";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "../styles/styles.css"
import AppContext from '../components/AppContext';

const App = () => {
  const [pagePosition, setPagePosition] = useState(0);

  window.addEventListener("scroll", function (e) {
    setPagePosition(window.pageYOffset);
  });
  

  return (
    <AppContext.Provider value={pagePosition}>
      <div>
        <Home />
        <NavBar />
        <div id="flow">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </AppContext.Provider>
  )
}
export default App;
