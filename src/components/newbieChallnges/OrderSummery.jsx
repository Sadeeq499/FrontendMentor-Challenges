import React from "react";
import { images } from "../../services";

function OrderSummary() {
  return (
    <div className="background w-full h-screen flex items-center justify-center bg-slate-300">
      <div className="bg-white w-full md:w-[23%] h-[80vh] max-h-[75vh] rounded-xl  shadow-slate-300 shadow-2xl">
        {/* image */}
        <img src={images.ActionHero} alt="illustration hero" className="rounded-md mx-auto" />

        {/* Text */}
        <div className="text-center mt-3">
          <h1 className="text-2xl font-bold">Order Summary</h1>
          <p className="text-sm text-gray-500 px-5">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
        </div>

        {/* songs plan */}
        <div className="items-center bg-slate-200 w-[80%] h-16 mt-4 ms-7 rounded">
          <div className="grid grid-cols-3 gap-1">
            <div className="col-span-1 flex items-center">
              <img src={images.MusicIcon} alt="music icon" className="w-10 h-10 mt-2 ms-2 rounded-full bg-slate-500" />
            </div>
            <div className="col-span-1 flex flex-col justify-center mt-3">
              <h1 className="text-sm font-bold w-20">Annual Plan</h1>
              <p className="text-xs text-gray-500">$59.99/year</p>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <a href="#" className="text-xs text-neutral-DarkBlue font-bold underline ">Change</a>
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="flex flex-col items-center justify-center mt-5">
          <button className="bg-primary-Bright w-[90%] h-10 rounded-md text-white font-bold mb-3">Proceed to Payment</button>
          <button className="bg-white w-[90%] h-10 rounded-md text-neutral-DarkBlue font-bold">Cancel Order</button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
