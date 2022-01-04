import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_transparent_2.png";

const About = () => {
  return (
    <div>
      <div className="relative pb-2 h-full justify-center items-center">
        <div className="flex flex-col pb-5">
          <div className="relative flex flex-col mb-7">
            <div className="flex flex-col justify-center items-center">
              <img
                className=" w-full h-370 2xl:h-510 shadow-lg object-cover"
                src="https://picsum.photos/1600/900"
                alt="user-pic"
              />
            </div>
            <h1 className="font-bold text-3xl text-center mt-10 text-indigo-900">
              Welcome to PICME!
            </h1>
            <div className="pl-12 pr-12 ml-12 mr-12">
              <h1 className="text-xl text-center pt-12 pl-12 pr-12 ml-12 mr-12 leading-10 text-indigo-600">
                PICME is a social media app and a visual discovery engine for
                finding ideas like recipes, home and style inspiration, prints,
                illustrations, photos, and more. With shared Pins on PICME, you
                will always find ideas to spark inspiration. When you discover
                Pins you love, save them to keep your ideas organized and easy
                to find.
              </h1>
              <Link
                to="/"
                className="flex flex-col justify-center items-center pt-12"
              >
                <img src={logo} alt="logo" className="w-28" />
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
