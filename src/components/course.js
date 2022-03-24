import React from "react";
import "./index.css";
function Course(props){
    return (
      <div>
        <img src={props.img} alt="student studying" />
        <div>
          <div>
            <button>Web development</button>
            <p>$130.00</p>
          </div>
          <h5>Web Development</h5>
          <p>
            Which whose darkness saying were life unto fish wherein all fish of
            together called
          </p>
          <hr />
          <div>
            <div>
              <img />
              <p>Conduct By:</p>
              <p>James Well</p>
            </div>
            <div>
                <img src="./assets/icon/star.svg" alt="ratings"/>
                <p>3.8 Ratings</p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Course;