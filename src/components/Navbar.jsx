import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? "bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3 group'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <img 
              src={logo} 
              alt='logo' 
              className='w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6' 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
          </div>
          <div className='text-white text-[18px] font-bold cursor-pointer flex group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300'>
            Sanjay Anbazhagan&nbsp;
            <span className='sm:block hidden'> | Full Stack Developer</span>
          </div>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-0'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative text-[16px] font-medium cursor-pointer transition-all duration-300 ${
                active === nav.title 
                  ? "text-white" 
                  : "text-white/90 hover:text-white"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a 
                href={`#${nav.id}`}
                className="relative py-2 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                {nav.title}
                <span 
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    active === nav.title ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div 
            className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className={`w-6 h-6 object-contain transition-all duration-300 ${toggle ? 'rotate-180' : 'rotate-0'}`}
            />
          </div>

          <div
            className={`${
              !toggle ? "hidden opacity-0 scale-95" : "flex opacity-100 scale-100"
            } p-6 bg-black/90 backdrop-blur-md absolute top-16 right-0 min-w-[200px] z-10 rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 transform`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] transition-all duration-300 transform hover:translate-x-2 ${
                    active === nav.title 
                      ? "text-white" 
                      : "text-white/90 hover:text-white"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a 
                    href={`#${nav.id}`}
                    className="relative py-2 px-4 rounded-lg hover:bg-white/5 transition-all duration-300 block"
                  >
                    {nav.title}
                    <span 
                      className={`absolute bottom-0 left-4 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                        active === nav.title ? "w-8" : "w-0"
                      }`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;