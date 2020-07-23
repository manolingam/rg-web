import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Manifesto from "./pages/Manifesto";
import Projects from "./pages/Projects";

import raidguild_logo from "./assets/raidguild__logo.png";

class App extends React.Component {
    componentDidMount() {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        const svg = document.querySelector(".wave");

        hamburger.addEventListener("click", () => {
            svg.classList.toggle("close");
            navLinks.classList.toggle("open");
            links.forEach((link) => {
                link.classList.toggle("fade");
            });
        });
    }

    render() {
        return (
            <Router>
                <div className='main'>
                    <ul className='nav-links'>
                        <li>
                            <a href='#'>Manifesto</a>
                        </li>

                        <li>
                            <a href='#'>Projects</a>
                        </li>
                    </ul>
                    <Home />
                    <Manifesto />
                    <Projects />
                </div>

                <nav className='hamburger'>
                    <i className='fas fa-bars fa-3x'></i>
                </nav>
                <div className='wave'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 1440 320'
                    >
                        <path
                            fill='#000'
                            fill-opacity='1'
                            d='M0,192L1440,288L1440,320L0,320Z'
                        ></path>
                    </svg>
                </div>
                <img id='logo' src={raidguild_logo} alt='logo' />
                <footer>
                    <a href='https://twitter.com/raidguild' target='_blank'>
                        <i className='fab fa-twitter fa-1x'></i>
                    </a>
                    <a href='https://handbook.raidguild.org/' target='_blank'>
                        <i class='fas fa-book fa-1x'></i>
                    </a>
                    <a href='https://github.com/raid-guild' target='_blank'>
                        <i className='fab fa-github fa-1x'></i>
                    </a>
                </footer>
            </Router>
        );
    }
}

export default App;
