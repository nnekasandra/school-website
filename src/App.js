import './App.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <header className="App-header">
      <div className='header flex justify-around pt-6 relative'>
        <div className='pl-5'>
          <img src='assets/logo.png' alt='school logo'/>
        </div>
        <input type="checkbox" id="check" className='hidden'/>
        <label for="check" class="checkbtn">
          <FontAwesomeIcon icon={faBars} className='hamburger-icon cursor-pointer bg-gradient-to-r from-gradient-orange to-gradient-yellow px-3 py-2'/>
        </label>
        <nav className='mt-4'>
          <ul className='flex bg-blue gap-12 text-dim-blue'>
            <li><a href='index.html' className='text-active-color hover:text-orange'>Home</a></li>
            <li><a href='index.html' className='hover:text-orange'>About</a></li>
            <li><a href='index.html' className='hover:text-orange'>Courses</a></li>
            <li><a href='index.html' className='hover:text-orange'>Blog</a></li>
            <li className='hover:text-orange'><a href='index.html' className='hover:text-orange'>Page&nbsp;</a>
            <FontAwesomeIcon icon={faCaretDown}/>
              <ul className='hidden'>
                <li><a href='#'>Page1</a></li>
                <li><a href='#'>Page2</a></li>
              </ul>
            </li>
            <li><a href='index.html' className='hover:text-orange'>Contact</a></li>
          </ul>
        </nav>
        <button className='border-0 rounded-full p-3 px-5 text-white border-orange w-40 h-14 cursor-pointer bg-gradient-to-r from-gradient-orange to-gradient-yellow cta'>Get A Quote</button>
      </div>
    </header>
  );
}

export default App;
