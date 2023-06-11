import React from "react";
import ScoreLable from "./ScoreLable";
import Images from "../../../services/images";

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: `${Images.Reaction}`,
    textColor: "text-lightred",
    bgColor: "bg-rose-50",
  },
  {
    category: "Memory",
    score: 92,
    icon: `${Images.Memory}`,
    textColor: "text-OrangeYellow",
  },
  {
    category: "Verbal",
    score: 61,
    icon: `${Images.Verbal}`,
    textColor: "text-GreenTail",
    bgColor: "bg-PaleBlue",
  },
  {
    category: "Visual",
    score: 72,
    icon: `${Images.Visual}`,
    textColor: "text-CobaltBlue",
    bgColor: "bg-LightLavender",
  },
];

function ResultSummary() {
  return (
    <div className="flex flex-row justify-center mt-5 ">
      <div className="w-[25%] h-[60vh] bg-gradient-to-t from-LightRoyalBG to-LightBlueBG rounded-3xl">
        <h1 className=" text-center text-white/50 font-One mt-5">
          Your Result
        </h1>

        {/* circle with text big 76 and small of 100 */}
        <div className="flex flex-row justify-center mt-5">
          <div className="w-[150px] h-[150px] bg-gradient-to-br from-Violetbluecircle to-Persianbluecircle rounded-full ">
            <div className=" mt-7 ">
              <h1 className="text-center text-7xl text-white/90 font-One">
                76
              </h1>
              <h6 className="text-center text-lg text-white/50 font-One ">
                {" "}
                of 100
              </h6>
            </div>
          </div>
        </div>

        <div className="w-[80%] ms-9 gap-y-2">
          <h1 className="text-center text-2xl text-white/90 font-One mt-5">
            Great
          </h1>
          <h6 className="text-center text-[18px] leading-5 text-white/50 font-One mt-2">
            You scored higher than 65% of the people who have taken these tests.
          </h6>
        </div>
      </div>
      {/* card two */}
      <div className="w-[25%] h-[60vh] shadow-2xl rounded-xl">
        <div className="p-7">
          <h1 className="font-One text-xl">Summary</h1>
          {data.map((item, index) => (
            <ScoreLable
              key={index}
              category={item.category}
              score={item.score}
              icon={item.icon}
              textColor={item.textColor}
              bgColor={item.bgColor}
            />
          ))}

          {/* rounded button with continue text  */}
          <button className="w-full h-10 rounded-full bg-neutral-DarkBlue font-One text-white mt-5">
            {" "}
            Continue{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultSummary;
