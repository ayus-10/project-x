import React, { useState } from "react";
import { HiBars4 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";

const Navbar = (props) => {
  const navLinks = [
    {
      title: "Categories",
      dropdowns: [
        "All",
        "Apparel",
        "Electronics",
        "Gaming",
        "Beauty",
        "Home Decor",
        "Others",
      ],
    },
    {
      title: "Support",
      dropdowns: ["FAQs", "Shipping", "Return"],
    },
    {
      title: "Sell",
      dropdowns: ["How to Sell", "Shipping", "Seller Fees"],
    },
  ];

  const [category, setCategory] = useState("all");
  const changeCategory = (category) => {
    setCategory(category);
    props.changeNavCategory(category);
  };

  const [mobileNav, setMobileNav] = useState(false);
  const changeNav = () => {
    setMobileNav(!mobileNav);
  };

  const [toggleDropdowns, setToggleDropdowns] = useState(
    Array(navLinks.length).fill(false),
  );
  const handleToggleDropdowns = (index) => {
    const newToggleDropdowns = [...toggleDropdowns];
    newToggleDropdowns[index] = !newToggleDropdowns[index];
    setToggleDropdowns(newToggleDropdowns);
  };

  return (
    <header className="w-full pt-2 text-gray-900">
      <nav className="h-18 mx-auto flex w-full justify-between rounded-full bg-white p-2 shadow-md md:w-[99%]">
        <h1 className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-rose-500 p-2 text-2xl uppercase tracking-widest text-white">
          X
        </h1>
        <ul className="hidden items-center justify-between gap-12 md:flex">
          {navLinks.map((navLink, index) => (
            <li className="group relative cursor-pointer" key={index}>
              <span className="rounded-full p-2 text-xl uppercase tracking-wider duration-300 ease-in-out group-hover:bg-rose-500 group-hover:text-white">
                {navLink.title}
              </span>
              <div className="absolute inset-0 z-10 hidden pt-12 group-hover:block">
                <ul className="h-fit w-fit rounded-md bg-white text-lg">
                  {navLink.dropdowns.map((dropdown, i) => (
                    <li className="w-32 cursor-pointer p-2 text-center" key={i}>
                      <p
                        className="border-b border-rose-500 duration-300 ease-in-out hover:text-rose-500"
                        onClick={() =>
                          changeCategory(dropdown.toLocaleLowerCase())
                        }
                      >
                        {dropdown}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          <li>
            <button className="rounded-full border-2 border-rose-500 bg-rose-500 p-2 text-xl uppercase text-white duration-300 ease-in-out hover:bg-white hover:text-gray-900">
              View cart
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
        className={`fixed top-2 z-50 h-screen w-2/3 rounded-r-[2.25rem] bg-rose-500 duration-300 ease-in-out ${
          mobileNav ? "left-0" : "-left-[100%] "
        }`}
      >
        <ul className="mx-4 my-12 flex h-full flex-col gap-8 text-2xl text-white">
          {navLinks.map((navLink, index) => (
            <li key={index} className=" cursor-pointer">
              <p
                onClick={() => handleToggleDropdowns(index)}
                className={`w-full bg-white p-2 text-center text-rose-600 ${
                  toggleDropdowns[index] ? "rounded-t-md" : "rounded-md"
                }`}
              >
                {navLink.title}
                <FaChevronDown
                  className={`ml-4 inline text-rose-600 duration-200 ease-in-out ${
                    toggleDropdowns[index] ? "rotate-180" : "rotate-0"
                  }`}
                />
              </p>
              {toggleDropdowns[index] && (
                <ul className="rounded-b-md bg-white p-2 text-gray-900">
                  {navLink.dropdowns.map((dropdown, i) => (
                    <li
                      key={i}
                      className="cursor-pointer py-2 text-center"
                      onClick={() =>
                        changeCategory(dropdown.toLocaleLowerCase())
                      }
                    >
                      {dropdown}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="w-full cursor-pointer rounded-md bg-white p-2 text-center text-rose-600">
            View Cart
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
