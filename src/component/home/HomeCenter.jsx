import React from "react";
import { NavLink } from "react-router-dom";

const HomeCenter = () => {
  return (
    <div className="w-[40wh]">
      <div className="story w-full bg-gray-300 rounded-lg h-[500px]">
        <div className="w-full flex  items-center">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "relative hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]  before:w-[100%] before:-translate-x-1/2 before:-bottom-[30%] before:left-1/2 before:h-[5px] before:absolute before:content-['']  before:bg-blue-500 text-blue-500"
                : "relative hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]"
            }
            to="/story"
          >
            Story
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "relative hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]  before:w-[100%] before:-translate-x-1/2 before:-bottom-[30%] before:left-1/2 before:h-[5px] before:absolute before:content-['']  before:bg-blue-500 text-blue-500"
                : "relative hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]"
            }
            to="/feeds"
          >
            Feeds
          </NavLink>
        </div>
        <div></div>
      </div>
      <div className="post"></div>
      <div className="news"></div>
    </div>
  );
};

export default HomeCenter;
