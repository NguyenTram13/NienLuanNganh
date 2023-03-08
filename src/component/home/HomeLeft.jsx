import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import { NavLink } from "react-router-dom";
const HomeLeft = () => {
  return (
    <div className="w-[30wh]">
      <div className=" flex items-center g-x-3 p-3 hover:bg-gray-200 cursor-pointer w-full rounded-lg transition-all">
        <span className="w-[50px] rounded-lg ">
          <img
            className="object-cover rounded-full "
            src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
            alt=""
          />
        </span>
        <span className="p-2 text-lg ">Nguyễn Ngọc Trâm</span>
      </div>
      <div className="mx-3">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]  before:w-[100%] before:-translate-x-1/2 before:-bottom-[30%] before:left-1/2 before:h-[5px] before:absolute before:content-['']  before:bg-blue-500 text-blue-500"
              : ""
          }
          to="/friends"
        >
          <div className="flex items-center g-x-3 p-3 hover:bg-gray-200 cursor-pointer w-full rounded-lg transition-all">
            <span className="w-[40px] rounded-lg ">
              <img src="../../../public/img/add-friend.png" alt="" />
            </span>
            <span className="p-2 text-l ">Friends</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "relative hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]  before:w-[100%] before:-translate-x-1/2 before:-bottom-[30%] before:left-1/2 before:h-[5px] before:absolute before:content-['']  before:bg-blue-500 text-blue-500"
              : ""
          }
          to="/Groups"
        >
          <div className="flex items-center g-x-3 p-3 hover:bg-gray-200 cursor-pointer w-full rounded-lg transition-all">
            <span className="w-[40px] rounded-lg ">
              <img src="../../../public/img/group.png" alt="" />
            </span>
            <span className="p-2 text-l ">Groups</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "relative hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]  before:w-[100%] before:-translate-x-1/2 before:-bottom-[30%] before:left-1/2 before:h-[5px] before:absolute before:content-['']  before:bg-blue-500 text-blue-500"
              : ""
          }
          to="/Watch"
        >
          <div className="flex items-center g-x-3 p-3 hover:bg-gray-200 cursor-pointer w-full rounded-lg transition-all">
            <span className="w-[40px] rounded-lg ">
              <img src="../../../public/img/watch.png" alt="" />
            </span>
            <span className="p-2 text-l ">Watch</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "relative hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]  before:w-[100%] before:-translate-x-1/2 before:-bottom-[30%] before:left-1/2 before:h-[5px] before:absolute before:content-['']  before:bg-blue-500 text-blue-500"
              : ""
          }
          to="/page"
        >
          <div className="flex items-center g-x-3 p-3 hover:bg-gray-200 cursor-pointer w-full rounded-lg transition-all">
            <span className="w-[40px] rounded-lg ">
              <img src="../../../public/img/book.png" alt="" />
            </span>
            <span className="p-2 text-l ">Page</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "relative hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]  before:w-[100%] before:-translate-x-1/2 before:-bottom-[30%] before:left-1/2 before:h-[5px] before:absolute before:content-['']  before:bg-blue-500 text-blue-500"
              : ""
          }
          to="/memories"
        >
          <div className="flex items-center g-x-3 p-3 hover:bg-gray-200 cursor-pointer w-full rounded-lg transition-all">
            <span className="w-[40px] rounded-lg ">
              <img src="../../../public/img/time.png" alt="" />
            </span>
            <span className="p-2 text-l ">Memories</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "relative hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]  before:w-[100%] before:-translate-x-1/2 before:-bottom-[30%] before:left-1/2 before:h-[5px] before:absolute before:content-['']  before:bg-blue-500 text-blue-500"
              : ""
          }
          to="/save"
        >
          <div className="flex items-center g-x-3 p-3 hover:bg-gray-200 cursor-pointer w-full rounded-lg transition-all">
            <span className="w-[40px] rounded-lg ">
              <img src="../../../public/img/bookmark.png" alt="" />
            </span>
            <span className="p-2 text-l ">Save</span>
          </div>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]  before:w-[100%] before:-translate-x-1/2 before:-bottom-[30%] before:left-1/2 before:h-[5px] before:absolute before:content-['']  before:bg-blue-500 text-blue-500"
              : ""
          }
          to="/game"
        >
          <div className="flex items-center g-x-3 p-3 hover:bg-gray-200 cursor-pointer w-full rounded-lg transition-all">
            <span className="w-[40px] rounded-lg ">
              <img src="../../../public/img/joystick.png" alt="" />
            </span>
            <span className="p-2 text-l ">Games</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeLeft;
