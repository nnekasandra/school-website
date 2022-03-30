import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHeart } from "@fortawesome/free-solid-svg-icons";
function Blog(props) {
  return (
    <div>
      <img src={props.img} alt="student studying" className="w-full" />
      <div className="border border-icon-bg card-body cards transition">
        <div className="flex justify-between my-8">
          <button className="py-2 px-4 bg-orange-text text-white text-sm transition hover-effect">
            {props.stack}
          </button>
        </div>
        <h5 className="text-xl hover:text-orange-text text-dim-blue cursor-pointer font-bold transition">
          {props.title}
        </h5>
        <p className="text-gray text-sm leading-7 my-5">
          Which whose darkness saying were life unto fish wherein all fish of
          together called
        </p>
        <hr className=" border-icon-bg" />
        <div>
          <div className="flex gap-10 my-6 text-gray2 text-sm">
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faComments} className="mt-1" />
              <p>2 Comments</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faHeart} className="mt-1" />
              <p>2k Like</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
