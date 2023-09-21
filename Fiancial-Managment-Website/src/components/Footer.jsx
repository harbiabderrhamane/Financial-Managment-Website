import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="grid max-w-[1240px] mx-auto py-16 px-4  lg:grid-cols-3 gap-8 text-gray-300">
      <div className="mr-8">
        <h1 className="w-full text-3xl  font-bold text-[#00df9a] ">REACT.</h1>
        <p className="mt-4 font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui delectus
          accusamus rem nihil!
        </p>
        <div className="flex my-6 gap-9 md:w-[75%] ">
          <FaDribbbleSquare size={30}></FaDribbbleSquare>
          <FaFacebookSquare size={30}></FaFacebookSquare>
          <FaInstagramSquare size={30}></FaInstagramSquare>
          <FaTwitterSquare size={30}></FaTwitterSquare>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h4 className="font-bold text-2xl text-gray-400">Solutions</h4>
          <ul>
            <li className="py-1">
              <a href="">Analatycs</a>
            </li>
            <li className="py-1">
              <a href="">Commerce</a>
            </li>
            <li className="py-1">
              <a href="">Marketing</a>
            </li>
            <li className="py-1">
              <a href="">Api Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-2xl text-gray-400">Support</h4>
          <ul>
            <li className="py-1">
              <a href="">Pricing</a>
            </li>
            <li className="py-1">
              <a href="">Documentaries</a>
            </li>
            <li className="py-1">
              <a href="">Guides</a>
            </li>
            <li className="py-1">
              <a href="">Insights</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-2xl text-gray-400"> Company</h4>
          <ul>
            <li className="py-1">
              <a href="">About</a>
            </li>
            <li className="py-1">
              <a href="">Blog</a>
            </li>
            <li className="py-1">
              <a href="">Press</a>
            </li>
            <li className="py-1">
              <a href="">Jobs</a>
            </li>
            <li className="py-1">
              <a href="">Carrers</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-2xl text-gray-400">Legal</h4>
          <ul>
            <li className="py-1">
              <a href="">Claims</a>
            </li>
            <li className="py-1">
              <a href="">Policy</a>
            </li>
            <li className="py-1">
              <a href="">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
