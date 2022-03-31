import React from "react";
function Slider(props){
    return (
      <div>
        <div className="flex gap-5">
          <div className="p-10 testimonial-slider">
            <p className="text-gray italic">
              Behold place was a multiply creeping creature his domin to thiren
              open void hath herb divided divide creepeth living shall i call
              beginning third sea itself set
            </p>
            <h4 className="text-lg text-dim-blue font-bold">Michel Hashale</h4>
            <h5 className="text-gray font-bold"> Sr. Web designer</h5>
          </div>
          <div>
            <img
              src={props.img}
              alt="portrait of person giving testimonial"
              className="w-full"
            />
          </div>
        </div>
      </div>
    );
}
export default Slider;