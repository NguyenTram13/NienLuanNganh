import React from "react";
import { NavLink } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MovieIcon from "@mui/icons-material/Movie";
import { Input } from "@mui/material";
import Modal from "./ModalPost";
import ModalPost from "./ModalPost";

const HomeCenter = () => {
  return (
    <div className="w-[40wh] ">
      <div className="story w-full bg-gray-300 rounded-lg ">
        <div className="w-full flex text-center justify-around  items-center p-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "relative hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]  before:w-[100%] before:-translate-x-1/2 before:-bottom-[30%] before:left-1/2 before:h-[5px] before:absolute before:content-['']  before:bg-blue-500 text-blue-500"
                : "relative hover:bg-gray-200 py-1 text-center flex justify-center px-3 rounded-lg w-[100px]"
            }
            to="/home"
          >
            <AutoStoriesIcon></AutoStoriesIcon>
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
            <MovieIcon></MovieIcon>
            Feeds
          </NavLink>
        </div>
        <div className="flex  justify-between items-center p-2 gap-3">
          <div className="relative w-[130px] h-[200px] rounded-lg overflow-hidden cursor-pointer ">
            <img
              className="object-cover  w-full h-full hover:scale-110 transition-all"
              src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
              alt=""
            />
            <div className="absolute w-full bg-gray-800 text-center z-10  p-3 bottom-0">
              <span className="text-white  flex items-center justify-center text-center text-3xl w-[30px] h-[30px] bg-blue-600 rounded-full absolute left-14  border-gray-800 bottom-8 border-[3px]">
                +
              </span>
              <h5 className="text-white ">Create story</h5>
            </div>
          </div>
          <div className="relative w-[130px] h-[200px] cursor-pointer rounded-lg overflow-hidden ">
            <span className="relative">
              <img
                className="object-cover w-full h-full  hover:scale-110 transition-all"
                src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                alt=""
              />
              <span className=" absolute w-[35px] left-2 top-2">
                <img
                  className="object-cover rounded-full  border-blue-600 border-[3px]"
                  src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                  alt=""
                />
                <span className="absolute w-[10px] h-[10px] bg-green-600 border-10 rounded-full z-30 bottom-0 right-0"></span>
              </span>
              <span className=" text-sm z-100 absolute text-white left-2 bottom-2">
                Nguyen tram
              </span>
            </span>
          </div>
          <div className="relative w-[130px] h-[200px] cursor-pointer rounded-lg overflow-hidden ">
            <span className="relative">
              <img
                className="object-cover w-full h-full  hover:scale-110 transition-all"
                src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                alt=""
              />
              <span className=" absolute w-[35px] left-2 top-2">
                <img
                  className="object-cover rounded-full  border-blue-600 border-[3px]"
                  src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                  alt=""
                />
                <span className="absolute w-[10px] h-[10px] bg-green-600 border-10 rounded-full z-30 bottom-0 right-0"></span>
              </span>
              <span className=" text-sm z-100 absolute text-white left-2 bottom-2">
                Nguyen tram
              </span>
            </span>
          </div>
          <div className="relative w-[130px] h-[200px] cursor-pointer rounded-lg overflow-hidden ">
            <span className="relative">
              <img
                className="object-cover w-full h-full  hover:scale-110 transition-all"
                src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                alt=""
              />
              <span className=" absolute w-[35px] left-2 top-2">
                <img
                  className="object-cover rounded-full  border-blue-600 border-[3px]"
                  src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                  alt=""
                />
                <span className="absolute w-[10px] h-[10px] bg-green-600 border-10 rounded-full z-30 bottom-0 right-0"></span>
              </span>
              <span className=" text-sm z-100 absolute text-white left-2 bottom-2">
                Nguyen tram
              </span>
            </span>
          </div>
          <div className="relative w-[130px] h-[200px] cursor-pointer rounded-lg overflow-hidden ">
            <span className="relative">
              <img
                className="object-cover w-full h-full  hover:scale-110 transition-all"
                src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                alt=""
              />
              <span className=" absolute w-[35px] left-2 top-2">
                <img
                  className="object-cover rounded-full  border-blue-600 border-[3px]"
                  src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                  alt=""
                />
                <span className="absolute w-[10px] h-[10px] bg-green-600 border-10 rounded-full z-30 bottom-0 right-0"></span>
              </span>
              <span className=" text-sm z-100 absolute text-white left-2 bottom-2">
                Nguyen tram
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="post w-full bg-gray-300 rounded-lg mt-3">
        <div className="p-3 flex flex-row gap-3">
          <span className="w-[50px]  ">
            <img
              className="object-cover w-[50px] rounded-full "
              src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
              alt=""
            />
          </span>
          <ModalPost>
            <input
              type="text"
              placeholder="Medium"
              className=" bg-gray-300 w-full rounded-full px-2 "
            />
          </ModalPost>
        </div>
      </div>
      <div className="news"></div>
    </div>
  );
};

export default HomeCenter;
