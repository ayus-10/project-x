import React, { useState } from "react";
import { HiBars4 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      dropdowns: ["Link 1", "Link 2", "Link 3"],
    },
    {
      title: "About",
      dropdowns: ["Link 1", "Link 2", "Link 3"],
    },
    {
      title: "Services",
      dropdowns: ["Link 1", "Link 2", "Link 3"],
    },
  ];

  const [mobileNav, setMobileNav] = useState(false);
  const changeNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="sticky top-2 w-full text-gray-900">
      <nav className="h-18 mx-auto flex w-full justify-between rounded-full bg-white p-2 shadow-md md:w-[99%]">
        <h1 className="cursor-pointer rounded-full bg-rose-500 p-2 text-2xl uppercase tracking-widest text-white">
          Logo
        </h1>
        <ul className="hidden items-center justify-between gap-12 md:flex">
          {navLinks.map((navLink) => (
            <li className="group relative">
              <span className="rounded-full p-2 text-xl uppercase tracking-wider duration-300 ease-in-out group-hover:bg-rose-500 group-hover:text-white">
                {navLink.title}
              </span>
              <ul className="absolute inset-0 hidden pt-16 group-hover:block">
                {navLink.dropdowns.map((dropdown) => (
                  <li className="w-32 cursor-pointer bg-white p-2 text-center">
                    {dropdown}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <button className="rounded-full border-2 border-rose-500 bg-rose-500 p-2 text-xl uppercase text-white duration-300 ease-in-out hover:bg-white hover:text-gray-900">
              Get Started
            </button>
          </li>
        </ul>
        <div
          className="mx-2 flex items-center justify-center md:hidden"
          onClick={changeNav}
        >
          {mobileNav ? <RxCross1 size={32} /> : <HiBars4 size={32} />}
        </div>
      </nav>
      <div
        className={`fixed top-2 h-screen w-2/3 rounded-r-[2.25rem] bg-rose-500 duration-300 ease-in-out ${
          mobileNav ? "left-0" : "-left-[100%] "
        }`}
      >
        <ul>
          {navLinks.map((navLink) => (
            <li>{navLink.title}</li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
