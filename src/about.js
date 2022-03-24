import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPencilRuler,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import "./index.css";
import Card from "./components/card";
import Counter from "./components/counter";
import Course from "./components/course";
function About(props) {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row lg:ml-10 pt-8 background">
        <div className="about lg:px-14">
          <h5 className=" mb-6">EVERY CHILD YEARNS TO LEARN</h5>
          <h1 className="text-dim-blue text-4xl lg:text-6xl font-bold mb-8 leading-12">
            Making Your Childs World Better
          </h1>
          <p className="text-grey text-sm mb-10 leading-7 px-8 lg:px-0">
            Replenish seasons may male hath fruit beast were seas saw you arrie
            said man beast whales his void unto last session for bite. Set have
            great you'll male grass yielding yielding man
          </p>
          <div className="flex items-center justify-center lg:items-start lg:justify-start mb-20">
            <button className="btn border-0 rounded-full p-3 px-5 text-white border-orange text-sm cursor-pointer bg-gradient-to-r w-32 lg:w-40 h-12 lg:h-14 flex items-center justify-center text-center from-gradient-orange to-gradient-yellow">
              View Course
            </button>
            <button className="btn ml-6 border border-dim-blue rounded-full p-3 px-5 text-dim-blue text-sm cursor-pointer w-32 lg:w-40 h-12 lg:h-14 flex items-center justify-center hover:text-white font-bold hover:border-0 hover:bg-gradient-to-r from-gradient-orange to-gradient-yellow">
              Get Started
            </button>
          </div>
        </div>
        <div className="text-center div">
          <img src="./assets/banner2.png" alt="" className="deco-image" />
        </div>
      </section>
      <section className="features lg:mt-60 grid lg:flex gap-4 mt-28 mx-5">
        <div className="lg:ml-16 feature">
          <h2 className="text-dim-blue text-4xl lg:text-5xl font-bold mb-8">
            Awesome
            <br />
            Features
          </h2>
          <p className="text-gray text-sm mb-10 leading-8">
            Set have great you male grass yielding an yielding first their
            you're have called the abundantly fruit were man
          </p>
          <button className="btn border rounded-full p-3 px-5 text-sm cursor-pointer w-32 lg:w-40 h-12 lg:h-14 flex items-center justify-center text-white bg-gradient-to-r from-gradient-orange to-gradient-yellow">
            Read More
          </button>
        </div>
        <Card heading="Qualified Trainers" />
        <Card heading="Job Opportunity" />
        <Card heading="Better Future" />
      </section>
      <section className="about-us grid gap-20 pt-20">
        <div className="about-img-container">
          <img
            src="./assets/about.png"
            alt="people learning"
            className="about-img"
          />
        </div>
        <div className="lg:pt-10">
          <div className="flex mt-5 lg:mt-0">
            <div className="w-16 bg-orange mt-2 mr-4 height"></div>
            <h5 className="text-sm text-heading-color uppercase font-bold">
              About Us
            </h5>
          </div>
          <h2 className="lg:text-5xl text-3xl text-dim-blue font-bold py-5">
            Learning with Love and Laughter
          </h2>
          <p className="text-grey text-sm leading-8 py-4 paragraph">
            Fifth saying upon divide divide rule for deep their female all hath
            brind Days and beast greater grass signs abundantly have greater
            also days years under brought moveth.
          </p>
          <div className="flex gap-4 text-grey">
            <FontAwesomeIcon icon={faPenToSquare} className="text-lg" />
            <p className="text-sm leading-6">
              Him lights given i heaven second yielding seas gathered wear
            </p>
          </div>
          <div className="flex gap-4 text-grey py-6">
            <FontAwesomeIcon icon={faPencilRuler} className="text-lg" />
            <p className="text-sm leading-6">
              Fly female them whales fly them day deep given night.
            </p>
          </div>
          <button className="btn border rounded-full p-3 px-5 text-sm cursor-pointer w-32 lg:w-40 h-12 lg:h-14 flex items-center justify-center text-white bg-gradient-to-r from-gradient-orange to-gradient-yellow mt-5">
            Read More
          </button>
        </div>
      </section>
      <section className="mt-20 lg:mt-44 bg-gradient-to-r from-gradient-orange to-gradient-yellow grid items-center justify-center lg:flex lg:justify-between gap-10 lg:gap-1 px-20 py-20 statistic">
        <Counter type="All Teachers" />
        <Counter type="All Students" />
        <Counter type="Online Students" />
        <Counter type="Offline Students" />
      </section>
      <section className="courses">
        <p className="text-center">Popular Courses</p>
        <h3 className="text-center">Special Courses</h3>
        <div className="w-16 bg-orange mt-2 mr-4 height"></div>
        <div>
          <Course img="./assets/icon/star.svg" />
        </div>
        {/* <hr className="text-orange mt-2 mx-72 border-2 height flex items-center justify-center"></hr> */}
      </section>
      <section className="advance-section grid px-10 md:px-20 pt-24 gap-10">
        <div className="pt-14">
          <div className="flex mt-5 lg:mt-0">
            <div className="w-16 bg-orange mt-2 mr-4 height"></div>
            <h5 className="text-sm text-heading-color uppercase font-bold">
              Advance Feature
            </h5>
          </div>
          <h2 className="lg:text-5xl text-3xl text-dim-blue font-bold py-5">
            Our Advance Educator Learning System
          </h2>
          <p className="text-gray text-sm leading-8 py-4 advance-paragraph">
            Fifth saying upon divide divide rule for deep their female all hath
            brind Days and beast greater grass signs abundantly have greater
            also days years under brought moveth.
          </p>
          <div className="flex feature gap-5">
            <div>
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="border-0 text-dim-blue text-center rounded-full p-5 h-6 w-6 bg-icon"
              />
              <p className="text-dim-blue text-lg font-bold">Learn Anywhere</p>
              <h5 className="text-gray text-sm leading-8">
                There earth face earth behold she star so made void two given
                and also our
              </h5>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faUser}
                className="border-0 text-dim-blue text-center rounded-full p-5 h-6 w-6 bg-icon-bg-2"
              />

              <h5 className="text-dim-blue text-lg font-bold">
                Expert Teachers
              </h5>
              <p className="text-gray text-sm leading-8">
                There earth face earth behold she star so made void two given
                and also our
              </p>
            </div>
          </div>
        </div>
        <div className="feature-img">
          <img src="./assets/advance.png" alt="a reading illustration" />
        </div>
      </section>
    </div>
  );
}
export default About;
