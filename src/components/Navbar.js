import React, { useRef, useState } from "react";
import { useTranslation } from 'react-i18next'

function Navbar() {
  const [navBgColor, setNavBgColor] = useState(false);

  const { t, i18n } = useTranslation("global")

  const navbarBgChange = () => {
    if (window.scrollY >= 90) {
      setNavBgColor(true);
    } else {
      setNavBgColor(false);
    }
  };

  window.addEventListener("scroll", navbarBgChange);

  const [isOpened, setIsOpened] = useState(false);

  const openMenu = useRef(null);


  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const openRemover = () => {
    if (!isOpened) {
      openMenu.current.classList.add('open');
      openMenu.current.classList.remove('closed');
    } else if (isOpened) {
      openMenu.current.classList.remove('open');
      openMenu.current.classList.add('closed');
    }
  }

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
        <div
          className={isOpened ? "navbar-links-mo worked" : "navbar-links-mo"}
        >
          <button
            className={isOpened ? "opened menu" : "menu"}
            onClick={() => { handleClick(); openRemover(); }}
            aria-label={isOpened}
          >
            <svg width="60" height="60" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
          <div ref={openMenu} className='links-mo'>
            <a className="navbar-mo-btn" href="#whatido">
              <h2>{t("navbar.whatIDo")}</h2>
            </a>
            <a className="navbar-mo-btn" href="#projects">
              <h2>{t("navbar.projects")}</h2>
            </a>
            <a className="navbar-mo-btn" href="#contact">
              <h2>{t("navbar.contact")}</h2>
            </a>

            <div className="lenguage-switch-container">
              <button onClick={() => i18n.changeLanguage("en")} className={i18n.language === "en" ? "primary-btn" : "secondary-btn"}>EN</button>
              <button onClick={() => i18n.changeLanguage("es")} className={i18n.language === "es" ? "primary-btn" : "secondary-btn"}>ES</button>
            </div>
          </div>
        </div>

        <div className="navbar-links-pc d-none d-md-flex">
          <a className="navbar-btn" href="#whatido">
            {t("navbar.whatIDo")}
          </a>
          <a className="navbar-btn" href="#projects">
            {t("navbar.projects")}
          </a>
          <a className="navbar-btn" href="#contact">
            {t("navbar.contact")}
          </a>
          <div className="lenguage-switch-container">
            <button onClick={() => i18n.changeLanguage("en")} className={i18n.language === "en" ? "primary-btn" : "secondary-btn"}>EN</button>
            <button onClick={() => i18n.changeLanguage("es")} className={i18n.language === "es" ? "primary-btn" : "secondary-btn"}>ES</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
