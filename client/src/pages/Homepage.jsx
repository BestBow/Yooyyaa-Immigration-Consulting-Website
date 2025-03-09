import "tailwindcss";
import React from "react";
import "../styles/global.css";
import greenValley from "../Assets/Green-Valley.jpg";


const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-b from-blue-900 to-white">
        <h1 className="text-yellow-400 text-4xl font-bold">Home</h1>
      </section>
      
      {/* Services Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-2xl font-bold text-blue-900">SERVICES</h2>
        <div className="w-11/12 h-1 bg-yellow-400 mx-auto my-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="relative p-8 rounded-lg shadow-md overflow-hidden">
            <img
              src={greenValley}
              alt="Service 1"
              className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
            />
            <div className="relative z-10 text-white">SERVICE 1</div>
          </div>
          <div className="relative p-8 rounded-lg shadow-md overflow-hidden">
            <img
              src={greenValley}
              alt="Service 2"
              className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
            />
            <div className="relative z-10 text-white">SERVICE 2</div>
          </div>
          <div className="relative p-8 rounded-lg shadow-md overflow-hidden">
            <img
              src={greenValley}
              alt="Service 3"
              className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
            />
            <div className="relative z-10 text-white">SERVICE 3</div>
          </div>
          <div className="relative p-8 rounded-lg shadow-md overflow-hidden">
            <img
              src={greenValley}
              alt="Service 4"
              className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
            />
            <div className="relative z-10 text-white">SERVICE 4</div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-2xl font-bold text-blue-900">SUCCESS STORIES FROM OUR CUSTOMERS</h2>
        <div className="w-11/12 h-1 bg-yellow-400 mx-auto my-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {["John", "Kyle", "Angela", "Kim"].map((name, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left">
              <h3 className="text-xl font-bold text-blue-900">{name}</h3>
              <p className="text-yellow-500 my-2">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700">Lorem ipsum dolor sit amet...</p>
            </div>
          ))}
        </div>
        <div className="w-11/12 h-1 bg-yellow-400 mx-auto mt-8"></div> {/* Changed my-4 to mt-8 */}
      </section>
      
      {/* Call to Action Section */}
      <section
        className="text-center py-16 px-6 max-w-[75%] mx-auto" // Use max-w-[75%]
      >
        <h3 className="text-2xl font-bold text-blue-900">
          THINKING ABOUT COMING TO CANADA?
        </h3>
        <p className="text-lg text-gray-700 my-4">LET US KNOW HOW WE CAN HELP!</p>
        <div className="relative mt-6 w-full">
          <img
            src={greenValley}
            alt="Immigration services"
            className="w-full rounded-lg shadow-lg max-h-[400px] object-cover" // Use max-h-[400px] and object-cover
          />
          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold">
            TALK TO US TODAY
          </span>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
