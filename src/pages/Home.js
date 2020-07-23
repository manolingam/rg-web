import React from "react";
import { Link } from "react-router-dom";

import demon_banner from "../assets/raid__banner-img.png";

import "./Home.css";

const Home = () => {
    return (
        <section className='landing-view'>
            <div className='sub-container-1'>
                <p>
                    A Decentralized Collective of Mercenaries Ready to Slay Your
                    Web3 Product Demons
                </p>
                <div className='call-to-action'>
                    <Link to='/join'>Join Us</Link>
                    <Link to='/recruit'>Recruit Us</Link>
                </div>
            </div>
            <div className='sub-container-2'>
                <img id='banner' src={demon_banner} alt='banner' />
            </div>
        </section>
    );
};

export default Home;
