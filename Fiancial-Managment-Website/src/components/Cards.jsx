import React from "react";
import SinglePerson from "../assets/single.png";
import DoublePerson from "../assets/double.png";
import TriplePerson from "../assets/triple.png";

function Cards() {
  return (
    <div className="bg-white w-full py-[160px] px-4">
      <div className="grid max-w-[1240px] mx-auto md:grid-cols-3 gap-8">
        <article className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div>
            <img
              src={SinglePerson}
              alt=""
              className="w-20 mx-auto bf-white  mt-[-30px] pl-6"
            />
            <h2 className=" text-2xl font-bold text-center py-8">
              Single User
            </h2>
            <p className="text-center text-4xl font-bold">$149</p>
          </div>
          <div>
            <ul className="text-center font-medium">
              <li className=" border-b mx-8 py-2 mt-8">500 GB Storage</li>
              <li className=" border-b mx-8 py-2"> 1 User Allowed</li>
              <li className=" border-b mx-8 py-2">Send up to 2GB</li>
            </ul>
          </div>
          <button className="w-[200px] bg-[#00df9a] rounded-md font-medium py-3  px-6 mx-auto text-black mt-6 my-6 border-gray-100 ">
            Start Trial
          </button>
        </article>

        <article className="bg-gray-100 w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 ">
          <div>
            <img
              src={DoublePerson}
              alt=""
              className="w-20 mx-auto bf-white mt-[-30px] pl-6"
            />
            <h2 className=" text-2xl font-bold text-center py-8">
              Single User
            </h2>
            <p className="text-center text-4xl font-bold">$149</p>
          </div>
          <div>
            <ul className="text-center font-medium">
              <li className=" border-b mx-8 py-2 mt-8">
                <a href="">500 GB Storage</a>
              </li>
              <li className=" border-b mx-8 py-2">
                <a href=""> 1 User Allowed</a>
              </li>
              <li className=" border-b mx-8 py-2">
                <a href="">Send up to 2GB</a>
              </li>
            </ul>
          </div>
          <button className="w-[200px] bg-black rounded-md font-medium py-3  px-6 mx-auto text-[#00df9a] mt-6 my-6 border-gray-100 ">
            Start Trial
          </button>
        </article>
        <article className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div>
            <img
              src={TriplePerson}
              alt=""
              className="w-20 mx-auto bf-white  mt-[-30px] pl-6"
            />
            <h2 className=" text-2xl font-bold text-center py-8">
              Single User
            </h2>
            <p className="text-center text-4xl font-bold">$149</p>
          </div>
          <div>
            <ul className="text-center font-medium">
              <li className=" border-b mx-8 py-2 mt-8">
                <a href="">500 GB Storage</a>
              </li>
              <li className=" border-b mx-8 py-2">
                {" "}
                <a href="">1 User Allowed</a>
              </li>
              <li className=" border-b mx-8 py-2">
                <a href="">Send up to 2GB</a>
              </li>
            </ul>
          </div>
          <button className="w-[200px] bg-[#00df9a] rounded-md font-medium py-3  px-6 mx-auto text-black mt-6 my-6 border-gray-100 ">
            Start Trial
          </button>
        </article>
      </div>
    </div>
  );
}

export default Cards;
