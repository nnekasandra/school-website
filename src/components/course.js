import React from "react";
import "./index.css";
function Course(props) {
  return (
    <div>
      <img src={props.img} alt="student studying" className="w-full" />
      <div className="border border-icon-bg cards">
        <div className="flex justify-between my-8">
          <button className="py-2 px-4 bg-orange-text text-white text-sm transition hover-effect">
            {props.stack}
          </button>
          <p className="text-xl text-orange-text font-bold">{props.price}</p>
        </div>
        <h5 className="text-xl hover:text-orange-text text-dim-blue cursor-pointer font-bold transition">
          Web Development
        </h5>
        <p className="text-gray text-sm leading-7 my-5">
          Which whose darkness saying were life unto fish wherein all fish of
          together called
        </p>
        <hr className=" border-icon-bg" />
        <div className="flex justify-between my-8">
          <div className="flex gap-2">
            <img src={props.author} />
            <div>
              <p className="text-gray text-sm">Conduct By:</p>
              <p className="text-dim-blue text">James Well</p>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <img src="./assets/icon/color_star.svg" alt="ratings" />
              <img src="./assets/icon/color_star.svg" alt="ratings" />
              <img src="./assets/icon/color_star.svg" alt="ratings" />
              <img src="./assets/icon/color_star.svg" alt="ratings" />
              <img src="./assets/icon/star.svg" alt="ratings" />
            </div>
            <p className="text-gray text-sm mt-3">3.8 Ratings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Course;
