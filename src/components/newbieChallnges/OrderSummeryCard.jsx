import React from "react";
import { images } from "../../services";
import { AiOutlineShoppingCart } from "react-icons/ai";

function OrderSummeryCard() {
  return (
    <>
      <div className="MainContainer  absolute   w-[80%] h-[80vh] p-3">
        <div
          className="imageContainer w-[35%] h-[50vh]
          rounded-xl
          absolute left-[10%]
          shadow-2xl shadow-slate-300 border border-white
        "
        >
          <img
            src={images.cardImage1}
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="infoContainer absolute left-[45.2%] top-[1.5%]  w-[35%] h-[50vh]
           shadow-2xl shadow-slate-300 border border-white ps-2"
        >
          <h3 className="font-semibold tracking-wider"> PERFUME</h3>
          <h1 className="pt-3 font-extrabold text-4xl pr-28">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mt-2 text-justify pr-16 text-slate-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            dolor et amet, facere officiis, dolore odio, beatae repudiandae
            dicta odit assumenda totam quod tenetur aperiam error provident
            molestias? Quod, expedita!
          </p>
          <div className="flex mt-5 gap-7">
            <span className="font-extrabold text-5xl text-green-900">
              $149.99
            </span>
            <span className="line-through text-gray-400 pt-2">$169.99</span>
          </div>
          {/* <button className="mt-5 w-full bg-green-900 p-3 text-white font-semibold  rounded-lg">
            <AiOutlineShoppingCart /> Add to Cart
          </button> */}
          <button className="mt-5 w-full bg-green-900 hover:bg-green-700 text-white py-3 px-6 font-semibold rounded-lg flex items-center justify-center space-x-2">
            <AiOutlineShoppingCart size={20} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderSummeryCard;
