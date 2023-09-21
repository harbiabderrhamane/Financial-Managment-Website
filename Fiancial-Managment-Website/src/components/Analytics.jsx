import React from "react";
import Laptop from "../assets/laptop.jpg";
function Analytics() {
  return (
    <div className="bg-white w-full  px-4 py-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2  ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center text-center md:text-start">
          <p className="text-[#00df9a] font-bold">Data Analatycs Dashboard</p>
          <h1 className="font-bold text-black md:text-4xl sm:text-3xl text-2xl mb-4 mt-2">
            Manage Data Analatycs Center
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quisquam architecto porro, delectus eaque illo ullam. Eligendi
            dignissimos neque unde, a quia labore nihil accusantium provident
            pariatur itaque ipsa sunt tenetur recusandae expedita impedit minus
            iste error maxime! Esse, atque?
          </p>
          <button className="bg-[black] w-[200px] mx-auto py-3 px-6 mt-4 font-bold text-[#00df9a] rounded-md md:mx-0">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
