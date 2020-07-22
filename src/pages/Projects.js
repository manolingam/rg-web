import React from "react";

import "./Projects.css";

import daohaus from "../assets/projects/daohaus__logo--white.png";
import meta_chilli from "../assets/projects/meta_chill.png";
import moloch from "../assets/projects/moloch__logo--red.png";
import pokemol from "../assets/projects/pokemol__brand--invert.png";

const Projects = () => {
    return (
        <section className='projects'>
            <h3>Projects</h3>
            <div className='project-images'>
                <img src={meta_chilli} alt='meta chilli' />
                <img src={moloch} alt='moloch' />
                <img src={pokemol} alt='pokemol' />
                <img src={daohaus} alt='daohaus' />
            </div>
        </section>
    );
};

export default Projects;
