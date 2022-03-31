import React from "react";
import { faHeart, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <footer className="bg-background">
      <section className="grid mx-1 md:gap-20 gap-10 py-20 footer-section courses">
        <div>
          <div className="logo pb-7">
            <img src="assets/logo.png" alt="school logo" />
          </div>
          <p className="text-sm text-gray leading-6 pb-5">
            But when shot real her. Chamber her one visite removal six sending
            himself boys scot exquisite existend an
          </p>
          <p className="text-sm text-gray leading-6">
            But when shot real her hamber her
          </p>
        </div>
        <div>
          <h5 className="md:text-2xl text-xl text-dim-blue font-bold pb-7">
            Newsletter
          </h5>
          <p className="text-sm text-gray leading-6 pb-5">
            Stay updated with our latest trends Seed heaven so said place winged
            over given forth fruit.
          </p>
          <div className="pb-5 mail relative flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="email p-3 bg-transparent border border-email-border"
            />
            <button className="text-white border-0 cursor-pointer bg-gradient-to-r from-gradient-orange to-gradient-yellow p-3 btn rounded h-10 w-10 flex items-center justify-center send-btn">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
          <div className="flex gap-4 text-gray2">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faSnapchat} />
          </div>
        </div>
        <div>
          <h5 className="md:text-2xl text-xl text-dim-blue font-bold pb-7">
            Contact us
          </h5>
          <address className="text-sm text-gray leading-6 pb-5">
            <span className="text-dim-blue span">Address :</span> Hath of it
            fly signs bear be one blessed after
          </address>
          <p className="text-sm text-gray leading-6 pb-5">
            <span className="text-dim-blue text-lg span">Phone :</span> +2 36 265
            (8060)
          </p>
          <p className="text-sm text-gray leading-6">
            <span className="text-dim-blue text-lg span">Email :</span>
            info@colorlib.com
          </p>
        </div>
      </section>
      <hr className="border-email-border" />
      <p className="text-center text-lg text-gray leading-8 py-4">
        Made With <FontAwesomeIcon icon={faHeart} /> by
        <a href="https://www.github.com/nnekasandra"> Nneka</a>
      </p>
    </footer>
  );
}
export default Footer;
/**
 * 
 * 
 * 
 * 
 * 
 * 
element.style {
    transform: translate3d(-1239px, 0px, 0px);
    transition: all 0.25s ease 0s;
    width: 2891px;
}
 */