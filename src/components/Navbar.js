import React, { useState } from "react";

function Navbar() {

  const navBarPc = document.querySelector('.navbar-pc');

  const [navBgColor, setNavBgColor] = useState(false);

  const navbarBgChange = ()=>{
    if(window.scrollY >= 90){
      console.log('more than');
      setNavBgColor(true);      
    } else {
      console.log('not scrolling');
      setNavBgColor(false);
    }
  };

  window.addEventListener('scroll', navbarBgChange);


  console.log('working');
  return (
    <div className={navBgColor ? "navbar-pc navbar-background" : "navbar-pc"}>
      <div className="container">
        <div>
          <svg
            width="50"
            height="41"
            viewBox="0 0 50 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M26.0673 31.7748C24.4068 32.1856 22.7969 32.3892 21.2414 32.3892C14.7532 32.3892 10.9655 29.2117 10.9655 22.8567V12.2473H6.91742V6.40492H10.9655V0H17.9729V6.40677H25.2389V12.2491H17.9729V22.2423C17.9729 25.1126 19.4254 26.1878 22.7482 26.1878C23.1624 26.1878 24.2532 26.136 26.0692 25.9824V31.7729L26.0673 31.7748Z"
                fill="black"
              />
              <path
                d="M37.5895 9.58426V6.40678H31.1537V41H38.1611V29.3153C40.0296 31.314 42.7283 32.391 45.8431 32.391C47.32 32.391 48.7143 32.143 50.0018 31.6897V23.2509C48.8136 25.0275 46.8364 26.0879 44.5462 26.0879C40.9648 26.0879 38.058 23.5766 38.058 19.0667C38.058 14.5568 41.0173 12.0974 44.5462 12.0974C46.8589 12.0974 48.823 13.13 50.0018 14.901V6.53262C48.7143 6.08663 47.32 5.84235 45.8431 5.84235C42.3142 5.84235 39.3043 7.17478 37.5913 9.58426H37.5895Z"
                fill="black"
              />
              <path
                d="M3.54399 32.4299C5.50128 32.4299 7.08797 30.8631 7.08797 28.9304C7.08797 26.9977 5.50128 25.4309 3.54399 25.4309C1.5867 25.4309 0 26.9977 0 28.9304C0 30.8631 1.5867 32.4299 3.54399 32.4299Z"
                fill="black"
              />
            </g>
            
          </svg>
        </div>
        <div className="navbar-links-pc">
          <a className="navbar-btn" href="#whatido">
            what i do?
          </a>
          <a className="navbar-btn" href="#projects">
            projects
          </a>
          <a className="navbar-btn" href="#contact">
            contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
