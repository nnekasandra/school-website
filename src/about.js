import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faLayerGroup} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import './index.css';
function About(){
    return(
        <div>
            <section className="flex flex-col-reverse lg:flex-row ml-10">
                <div className="about">
                    <h5 className="text-text-color text-sm mb-6 font-bold">EVERY CHILD YEARNS TO LEARN</h5>
                    <h1 className="text-dim-blue text-4xl lg:text-6xl font-bold mb-8 leading-12">Making Your Childs World Better</h1>
                    <p className="text-grey text-sm mb-10 leading-8">Replenish seasons may male hath fruit beast were seas saw you arrie said man beast whales his void unto last session for bite. Set have great you'll male grass yielding yielding man</p>
                    <div className="flex items-center justify-center lg:items-start lg:justify-start">
                        <button className='border-0 rounded-full p-3 px-5 text-white border-orange text-sm cursor-pointer bg-gradient-to-r w-32 lg:w-40 h-12 lg:h-14 flex items-center justify-center text-center from-gradient-orange to-gradient-yellow'>View Course</button>
                        <button className='ml-6 border border-dim-blue rounded-full p-3 px-5 text-dim-blue text-sm font-bold cursor-pointer w-32 lg:w-40 h-12 lg:h-14 flex items-center justify-center hover:text-white hover:border-0 hover:bg-gradient-to-r from-gradient-orange to-gradient-yellow'>Get Started</button>
                    </div>
                </div>
                <div className="text-center div">
                    <img src="./assets/banner2.png" alt="" className="deco-image"/>
                </div>
            </section>
            <section className="features ml-10">
                <div>
                    <h2 className="text-dim-blue text-4xl font-bold mb-8">Awesome<br/>Features</h2>
                    <p className="text-grey text-sm mb-10 leading-8">Set have great you male grass yielding an yielding first their you're have called the abundantly fruit were man</p>
                    <button className='border rounded-full p-3 px-5 text-sm font-bold cursor-pointer w-32 lg:w-40 h-12 lg:h-14 flex items-center justify-center text-white bg-gradient-to-r from-gradient-orange to-gradient-yellow'>Read More</button>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid faLayerGroup" />
                </div>
            </section>
        </div>
    );
}
export default About;