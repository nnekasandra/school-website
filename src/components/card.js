import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
function Card(props) {
  return (
    <div className="border border-icon-bg hover:border-orange card transition-all ">
      <div className="flex items-center justify-center py-8">
        <FontAwesomeIcon
          icon={faLightbulb}
          className="border-0 text-dim-blue text-center rounded-full p-5 h-8 w-8 bg-icon-bg icon"
        />
      </div>
      <h4 className="text-dim-blue text-center text-lg font-bold pb-6">
        {props.heading}
      </h4>
      <p className="text-center text-gray text-sm leading-7 pb-10 px-3">
        Set have great you male grasses yielding yielding first their to called
        deep abundantly Set have great you male
      </p>
    </div>
  );
}
export default Card;
