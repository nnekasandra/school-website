import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
function App() {
  let navbar = document.getElementById("header");
  document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 40) {
      navbar.classList.add("app-header");
    } else {
      navbar.classList.remove("app-header");
    }
  });
  return (
    <header className="background" id="header">
      <div className="header flex justify-around py-4 relative background">
        <div className="logo lg:pl-8">
          <img src="assets/logo.png" alt="school logo" />
        </div>
        <input type="checkbox" id="check" className="hidden" />
        <label for="check" class="checkbtn">
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger-icon cursor-pointer bg-gradient-to-r from-gradient-orange to-gradient-yellow px-3 py-2"
          />
        </label>
        <nav className="mt-4 background">
          <ul className="flex bg-blue lg:gap-12 gap-8 text-dim-blue text-sm pl-3 lg:pl-0">
            <li className="pt-3 lg:pt-0">
              <a
                href="index.html"
                className="text-active-color hover:text-orange"
              >
                Home
              </a>
            </li>
            <li>
              <a href="index.html" className="hover:text-orange">
                About
              </a>
            </li>
            <li>
              <a href="index.html" className="hover:text-orange">
                Courses
              </a>
            </li>
            <li>
              <a href="index.html" className="hover:text-orange">
                Blog
              </a>
            </li>
            <li className="hover:text-orange blog">
              <a href="index.html" className="hover:text-orange">
                Page&nbsp;
              </a>
              <FontAwesomeIcon icon={faCaretDown} />
              <div className="bg-background blog-items text-black pl-4 pr-16">
                <li className="py-4">
                  <a href="index.html" className="hover:text-orange">
                    Page1
                  </a>
                </li>
                <li className="pb-4">
                  <a href="index.html" className="hover:text-orange">
                    Page2
                  </a>
                </li>
              </div>
            </li>
            <li>
              <a href="index.html" className="hover:text-orange">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn border-0 rounded-full p-3 px-5 text-white border-orange cursor-pointer bg-gradient-to-r from-gradient-orange to-gradient-yellow cta text-sm w-36 h-12">
          Get A Quote
        </button>
      </div>
    </header>
  );
}

export default App;
