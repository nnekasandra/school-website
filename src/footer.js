import React from "react";
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer(){
    return (
      <Footer className="bg-background">
        <div>
          <div className="logo lg:pl-8">
            <img src="assets/logo.png" alt="school logo" />
          </div>
          <p>
            But when shot real her. Chamber her one visite removal six sending
            himself boys scot exquisite existend an
          </p>
          <p>But when shot real her hamber her</p>
        </div>
        <div>
          <h5>Newsletter</h5>
          <p>
            Stay updated with our latest trends Seed heaven so said place winged
            over given forth fruit.
          </p>
          <div>
              <input type='email'placeholder='Enter Email Address'/>
              <button>
                  <FontAwesomeIcon icon={faAnglesRight}/>
              </button>
          </div>
        </div>
      </Footer>
    );
}
export default Footer;