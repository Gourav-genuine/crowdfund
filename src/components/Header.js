import React, { useState, useEffect} from "react";
// import logo from "../images/logo.svg";
// import hamburger from "../images/icon-hamburger.svg";
// import close from "../images/icon-close-menu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(768);

  useEffect(()=>{
    if (window.innerWidth >= width){
      setIsOpen(true)
    }else{
      setIsOpen(false)
    }
  },[])

  return (
    <>
      <header className=" absolute flex justify-between items-center px-5 py-8 w-full">
        <div>
          <img src="https://drive.google.com/uc?export=view&id=1JPltacpQpsRP7Ew-P-ikMla1B3wzprWx" alt="" />
        </div>
        {isOpen && (
          <nav className="absolute w-9/12 ml-16 mt-56 md:relative md:mt-0 md:w-auto md:ml-0">
            <ul className="bg-white shadow-2xl rounded-2xl py-3 md:bg-transparent md:shadow-none md:py-0 md:rounded-0 md:flex">
              <li className="cursor-pointer py-3 border-b border-gray-200 px-5 md:px-0 md:py-0 md:border-none md:text-white md:mx-3">
                About
              </li>
              <li className="cursor-pointer py-3 border-b border-gray-200 px-5 md:px-0 md:py-0 md:border-none md:text-white md:mx-3">
                Discover
              </li>
              <li className="cursor-pointer py-3  px-5 md:px-0 md:py-0 md:border-none md:text-white md:mx-3">Get started</li>
            </ul>
          </nav>
        )}
        <div className="md:hidden">
          {isOpen ? (
            <img
              src="https://drive.google.com/uc?export=view&id=1LM8kizVoeQR6gOmx-Wc-rlzoy0UlKtkp"
              alt=""
              className="w-5 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <img
              src="https://drive.google.com/uc?export=view&id=10vSUTUWyqI2c9SOvybdHTjKfV__P_Guk"
              alt=""
              className="w-6 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
