import React from "react";
import Pledges from "./Pledges";
import IconClodeModal from "../images/icon-close-modal.svg";

const Modal = () => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          
            <section className=" mt-5 bg-white mx-5 px-5 py-10 rounded-lg border-2">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-bold text-xl">Back this project</h4>
                  <p className="mb-5">
                    Want to support us in bringing Mastercraft Bamboo Monitor
                    Riser out in the world?
                  </p>
                </div>
                <div className="mt-2">
                  <img src={IconClodeModal} alt="" className="w-5" />
                </div>
              </div>
              <Pledges />
            </section>
          </div>
        
      </div>
    </>
  );
};

export default Modal;
