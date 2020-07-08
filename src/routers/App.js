import React, { useState } from 'react';
import Home from "../components/Home";
import About from "../components/About";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "../styles/styles.css"
import AppContext from '../components/AppContext';

const App = () => {
  const [pagePosition, setPagePosition] = useState(0)

  // let skillsIsDisplay = false;
  // let navBarIsDisplay = false;

  // window.onscroll = function (e) {
  //   // Skills Animation 
  //   if (window.pageYOffset >= 1000 && !skillsIsDisplay) {
  //     console.log("first");

  //     const imgs = document.querySelectorAll("#skill-list > img");
  //     for (let i = 0; i < imgs.length; i++) {
  //       imgs[i].classList.add("skills-anim");
  //     }

  //     // Skills title animation 
  //     document.querySelector("#about-skills h2").classList.add("slide-anim");
  //     skillsIsDisplay = true;
  //   }

  //   // Nav-bar & image animation 
  //   if (window.pageYOffset >= 839 && !navBarIsDisplay) {
  //     console.log("second");

  //     document.getElementById("nav-bar").classList.add("nav-anim")
  //     document.querySelector("#about-me img").classList.add("img-roll");
  //     navBarIsDisplay = true;
  //   }
  // }

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
