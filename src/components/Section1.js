import React from "react";
import masterLogo from "../images/logo-mastercraft.svg";
import bookmarkLogo from "../images/icon-bookmark.svg";
import './section1.css';


const Section1 = () => {
  return (
    <>
      <section className="lg:w-2/3 lg:mx-auto border-2 relative bg-white mx-5 px-5 pb-10 rounded-lg -mt-20">
        <img src={masterLogo} alt="" className="masterLogo" />
        <div className="pt-5 pb-3">
          <h2 className="text-center font-bold text-xl pb-2">
            Mastercraft Bamboo Monitor Riser
          </h2>
          <p className="text-center">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div className="flex justify-between">
          <button className=" btn rounded-full py-1 px-6 text-white" >
            Back this project
          </button>
          
          <button className="hidden md:block btn bookbtn rounded-full py-0 pr-5 text-white">
            <span className="flex justify-end items-center"><img src={bookmarkLogo} alt="" className="pr-4" />Bookmark</span> 
          </button>
          <img src={bookmarkLogo} alt="" className="md:hidden pr-4" />
          
        </div>
      </section>
    </>
  );
};

export default Section1;
