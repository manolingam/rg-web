import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Manifesto from "./pages/Manifesto";
import Projects from "./pages/Projects";

import raidguild_logo from "./assets/raidguild__logo.png";

function App() {
    return (
        <Router>
            <div className='main'>
                <Home />
                <Manifesto />
                <Projects />
            </div>
            <div className='wave'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                    <path
                        fill='#000'
                        fill-opacity='1'
                        d='M0,128L80,138.7C160,149,320,171,480,197.3C640,224,800,256,960,266.7C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
                    ></path>
                </svg>
            </div>
            <img id='logo' src={raidguild_logo} alt='logo' />
            <footer>
                <a href='https://twitter.com/raidguild' target='_blank'>
                    <i className='fab fa-twitter fa-2x'></i>
                </a>
                <a href='https://handbook.raidguild.org/' target='_blank'>
                    <i class='fas fa-book fa-2x'></i>
                </a>
                <a href='https://github.com/raid-guild' target='_blank'>
                    <i className='fab fa-github fa-2x'></i>
                </a>
            </footer>
        </Router>
    );
}

export default App;
