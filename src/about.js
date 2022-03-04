import React from "react";
import './App.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function About(){
    return(
        <section className="flex">
            <div className="about">
                <p>EVERY CHILD YEARNS TO LEARN WELL</p>
                <h1>Making Your Childs World Better</h1>
                <p>Replenish seasons may male hath fruit beast were seas saw you arrie said man beast whales his void unto last session for bite. Set have great you'll male grass yielding yielding man</p>
                <div className="flex">
                    <button className='border-0 rounded-full p-3 px-5 text-white border-orange cursor-pointer bg-gradient-to-r from-gradient-orange to-gradient-yellow cta'>View Courses</button>
                    <button className='border-0 rounded-full p-3 px-5 text-white border-orange cursor-pointer bg-gradient-to-r from-gradient-orange to-gradient-yellow cta'>Get Started</button>
                </div>
            </div>
            <div>
                <img src="./assets/banner2.png"/>
            </div>
        </section>
    );
}
export default About;