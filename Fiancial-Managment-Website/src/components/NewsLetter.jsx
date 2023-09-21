import React from "react";

function NewsLetter() {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="grid lg:grid-cols-3 max-w-[1240px] mx-auto">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tricks & tips to optimize your flow ?
          </h1>
          <p>sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4 ">
          <form
            action=""
            className="flex flex-col sm:flex-row items-center justify-between w-full"
          >
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="p-4 flex w-full rounded-md text-black md:w-[500px]  sm:w-[300px] "
            />
            <button
              type="submit"
              className="w-[200px] bg-[#00df9a] rounded-md font-medium py-3 px-6 mx-auto text-black mt-6 border-gray-100 ml-4 mb-4"
            >
              Notify me
            </button>
          </form>
          <p>
            we care about the protection of your data, Read our
            <a href="" className="text-[#00df9a] ml-2 ">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
