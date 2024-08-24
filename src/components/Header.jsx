import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import header logo
import LogoWhite from "../assets/images/logo-white.svg";
import LogoDark from "../assets/images/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add an empty dependency array to ensure the effect runs only once

  return (
    <header className="header">
      <div
        className={`${
          header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
        } fixed z-50 w-full transition-all duration-500`}
      >
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* header logo */}
          <Link to="/">
            {header ? (
              <img src={LogoDark} alt="header logo" className="w-[160px]" />
            ) : (
              <img src={LogoWhite} alt="header logo" className="w-[160px]" />
            )}
          </Link>

          {/* header menu */}
          <div className={`${header ? "text-primary" : "text-white"}`}>
            <ul className="flex items-center gap-x-6 font-tertiary text-[15px] uppercase tracking-[1.5px] lg:gap-x-8">
              <Link to="/about" className="transition hover:text-accent">
                About
              </Link>
              <Link to="/rooms" className="transition hover:text-accent">
                Rooms
              </Link>
              <Link to="/restaurants" className="transition hover:text-accent">
                Restaurants
              </Link>
              <Link to="/spa" className="transition hover:text-accent">
                Spa
              </Link>
              <Link to="/contact" className="transition hover:text-accent">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
