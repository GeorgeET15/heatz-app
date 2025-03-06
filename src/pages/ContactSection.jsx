import React from "react";
import logo from "../assets/name_logo.png";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 text-white mb-12 md:mb-0">
          <img src={logo} alt="Heatz Logo" className="w-50 mb-8" />

          <p className="text-[#565656] text-xs mb-8">
            Heatz® is a registered brand of Ashtelgroup. It is registered in
            different countries <br />
            including Saudi Arabia and UAE, especially in the Middle East.
            Heatz® is well known
            <br /> for its variety and quality of products launched in every
            season.
          </p>

          <div className="flex items-center mb-8">
            <input
              type="email"
              placeholder="Your mail"
              className="w-full max-w-xs p-3 text-[#565656] bg-transparent border-b border-gray-600 focus:outline-none text-xs"
            />
            <button className="p-3 cursor-pointer">
              <PaperAirplaneIcon className="w-5 h-5 text-[#565656]" />
            </button>
          </div>

          <div className="flex items-center text-[#565656] text-xs">
            <input type="checkbox" id="privacy" className="mr-2" />
            <label htmlFor="privacy">
              I confirm acceptance of the Privacy Policy and consent <br />
              to its terms, including the use of cookies.
            </label>
          </div>
        </div>

        <div className="md:w-1/2 text-white">
          <div className="flex justify-between mb-8">
            <h3 className="text-[12px] font-semibold w-1/3 text-left">
              Mob Acc
            </h3>
            <h3 className="text-[12px] font-semibold w-1/3 text-left">
              Com Acc
            </h3>
            <h3 className="text-[12px] font-semibold w-1/3 text-left">Help</h3>
          </div>

          <div className="grid grid-cols-3  text-[#565656] text-[12px]">
            <div className="flex flex-col items-start">
              <p className="mb-3">Earphones</p>
              <p className="mb-3">Cables</p>
              <p className="mb-3">Adapters</p>
              <p className="mb-3">Power Bank</p>
              <p className="mb-3">Batteries</p>
              <p className="mb-3">Car Chargers</p>
              <p className="mb-3">Holders</p>
              <p className="mb-3">Speakers</p>
              <p>Smartwatches</p>
            </div>

            <div className="flex flex-col items-start">
              <p className="mb-3">Earphones</p>
              <p className="mb-3">Cables</p>
              <p className="mb-3">Adapters</p>
              <p className="mb-3">Power Bank</p>
              <p className="mb-3">Batteries</p>
              <p className="mb-3">Car Chargers</p>
              <p className="mb-3">Holders</p>
              <p className="mb-3">Speakers</p>
              <p>Smartwatches</p>
            </div>

            <div className="flex flex-col items-start">
              <p className="mb-3">Contact Us</p>
              <p className="mb-3">FAQs</p>
              <p className="mb-3">Shipping & Returns</p>
              <p className="mb-3">Payment Methods</p>
              <p className="mb-3">Track Your Order</p>
              <p className="mb-3">About Us</p>
              <p className="mb-3">Delivery Policy</p>
              <p className="mb-3">Cancelation Policy</p>
              <p>Return Policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
