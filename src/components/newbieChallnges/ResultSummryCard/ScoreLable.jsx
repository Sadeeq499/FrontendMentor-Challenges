import React from "react";
import Images from "../../../services/images";

function ScoreLabel({ category, score, icon, textColor, bgColor }) {
  return (
    <div className="flex flex-row justify-between mt-3">
      {/* grid with 3 one for logo one for name and one for marks */}
      <div className={`grid grid-cols-3 w-full rounded-md ${bgColor} h-12`}>
        <div className="col-span-2 justify-items-start ">
          <div className="flex flex-row justify-start gap-3 mt-2">
            <img
              src={icon}
              alt="logo"
              className="w-6 h-6 rounded-full ms-1 mt-1"
            />
            <h1 className={` text-md w-full ${textColor} font-One mt-1`}>
              {category}
            </h1>
          </div>
        </div>
        <div className="col-span-1 ">
          <span className=" flex flex-row  mt-2 gap-1">
            <h1 className="font-bold font-One text-lg">{score}</h1>
            <h1 className="font-One text-lg text-gray-600 ">/ 100</h1>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ScoreLabel;
