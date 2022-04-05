import React from "react";
function Slider(props) {
  const slides = document.getElementsByClassName("testimonial-slide");
  for (let i = 0; i < slides.length; i++) {
    // slides[0].style.display = "none";
  }
  return (
    <div className="flex gap-10 testimonial-slider slide-container">
      <div className="lg:p-10 p-5 child-1">
        <blockquote className="text-gray italic leading-8">
          Behold place was a multiply creeping creature his domin to thiren open
          void hath herb divided divide creepeth living shall i call beginning
          third sea itself set
        </blockquote>
        <h4 className="text-lg text-dim-blue font-bold">Michel Hashale</h4>
        <h5 className="text-gray font-bold"> Sr. Web designer</h5>
      </div>
      <div className="child-2">
        <img
          src={props.img}
          alt="portrait of person giving testimonial"
          className="w-full"
        />
      </div>
    </div>
  );
}
export default Slider;
