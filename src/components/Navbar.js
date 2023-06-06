import React from "react";

function Navbar() {
  return (
    <div className="navbar-pc">
        <div className="container">
            <div>
              <h1>Logo</h1>
            </div>
            <div className="navbar-links-pc">
              <a className="navbar-btn" href="#whatido">what i do?</a>
              <a className="navbar-btn" href="#projects">projects</a>
              <a className="navbar-btn" href="#contact">contact</a>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
