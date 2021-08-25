import React, { useState } from "react";
import logo from "../images/logo.svg";
import "./Header.css";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close-menu.svg";

const Header2 = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <header className="absolute px-10 py-8 w-full">
        <nav className="flex justify-between">
          <div>
            <img src={logo} />
          </div>
          <div className=" flex text-white">
            <section className="mx-5 hidden md:block ">About</section>
            <section className="mx-5 hidden md:block ">Discover</section>
            <section className="mx-5 hidden md:block ">Get Started</section>
            {!openNav ? (
              <img
                className="mx-5 h-5 cursor-pointer md:hidden"
                src={hamburger}
                onClick={() => setOpenNav(!openNav)}
              />
            ) : (
              <>
              <div className="flex">
                <div className="flex-col bg-white rounded-lg text-black ">
                  <section className="mx-5 py-3  border-b">About</section>
                  <section className="mx-5 py-3 border-b">Discover</section>
                  <section className="mx-5 py-3 ">Get Started</section>
                </div>
                <img
                  className="mx-5 h-5 cursor-pointer md:hidden"
                  src={close}
                  onClick={() => setOpenNav(!openNav)}
                />
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header2;
