import React from "react";

import raid_tee from "../assets/raid__fantasy--tee-technicolor.png";

import "./Manifesto.css";

const Manifesto = () => {
    return (
        <section className='manifesto'>
            <div className='sub-container-1'>
                <img id='fantasy-tee' src={raid_tee} alt='fantasy tee' />
            </div>
            <div className='sub-container-2'>
                <h3>Manifesto</h3>
                <p>
                    We believe that DAOs will power the future of work. Through
                    the MetaCartel network, we assembled a fellowship of the
                    best builders, designers and hustlers in the space in order
                    to make this future a reality. By sharing resources,
                    branding and collaboration tools, we can create positive-sum
                    value for the Ethereum ecosystem in a way that has never
                    been possible before the advent of DAOs.
                </p>
                <p>
                    We believe in Web3 and are here to build it, use it, and
                    propogate it. The profits from our work will be used to fund
                    development of open source tooling and public goods. We will
                    share the learnings from our experiments and open source our
                    processes for the community to learn and build from.
                </p>
                <p>
                    "If you want to go fast, go alone. If you want to go far, go
                    together."
                </p>
            </div>
        </section>
    );
};

export default Manifesto;
