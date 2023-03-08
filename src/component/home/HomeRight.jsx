import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import React from "react";
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));
const HomeRight = () => {
  return (
    <div className="w-[30wh]">
      <hr className="font-bold text-xl" />
      <div className="w-full p-2">
        <div className=" flex justify-between items-center">
          <span className="text-xl">Friend requests</span>
          <span className="hover:bg-gray-300 cursor-pointer rounded-lg p-1 text-l text-blue-600">
            See all
          </span>
        </div>
        <div className=" hover:bg-gray-200 cursor-pointer w-full rounded-lg transition-all p-2">
          <div className=" flex items-center gap-3 ">
            <span className="w-[50px] rounded-lg ">
              <img
                className="object-cover rounded-full "
                src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                alt=""
              />
            </span>
            <div className="py-2">
              <h4 className="text-l ">Nguyễn banhs us</h4>
              <div className="flex justify-between items-center gap-x-10 ">
                <span className="relative w-[30px] rounded-lg ">
                  <img
                    className="object-cover rounded-full "
                    src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                    alt=""
                  />
                  <span className="absolute top-0 left-3 w-[30px] rounded-lg ">
                    <img
                      className="object-cover rounded-full "
                      src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                      alt=""
                    />
                    <span className="absolute top-0 left-3 w-[30px] rounded-lg ">
                      <img
                        className="object-cover rounded-full "
                        src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                        alt=""
                      />
                    </span>
                  </span>
                </span>
                <span className="text-sm">5 mutual friends</span>
              </div>
            </div>
            <span> 3ngayf</span>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="contained">Confirm</Button>
            <Button variant="outlined">Delete</Button>
          </div>
        </div>
      </div>
      <hr className="font-bold text-xl" />
      <div className="p-2">
        <div className="flex justify-between">
          <span className="text-xl">Contacts</span>
          <div className="flex gap-3">
            <VideocamRoundedIcon
              fontSize="large"
              className="hover:bg-gray-300 rounded-full  p-1 cursor-pointer "
            ></VideocamRoundedIcon>
            <SearchRoundedIcon
              fontSize="large"
              className="hover:bg-gray-300 rounded-full  p-1 cursor-pointer"
            ></SearchRoundedIcon>
            <MoreHorizRoundedIcon
              className="hover:bg-gray-300 rounded-full  p-1 cursor-pointer"
              fontSize="large"
            ></MoreHorizRoundedIcon>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-3  p-2 hover:bg-gray-300 cursor-pointer transition-all rounded-lg">
            <span className="relative w-[30px] rounded-lg before:bg-green-600 before:text-xl before:text-green-500 before:w-[10px] before:h-[10px] before:fixed before:rounded-full before:right-0 before:bottom-0 before:absolute">
              <img
                className="object-cover rounded-full "
                src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                alt=""
              />
            </span>
            <span cls>Minh Tran</span>
          </div>
          <div className="flex items-center gap-3  p-2 hover:bg-gray-300 cursor-pointer transition-all rounded-lg">
            <span className="relative w-[30px] rounded-lg before:bg-green-600 before:text-xl before:text-green-500 before:w-[10px] before:h-[10px] before:fixed before:rounded-full before:right-0 before:bottom-0 before:absolute">
              <img
                className="object-cover rounded-full "
                src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                alt=""
              />
            </span>
            <span cls>Minh Tran</span>
          </div>
          <div className="flex items-center gap-3  p-2 hover:bg-gray-300 cursor-pointer transition-all rounded-lg">
            <span className="relative w-[30px] rounded-lg before:bg-green-600 before:text-xl before:text-green-500 before:w-[10px] before:h-[10px] before:fixed before:rounded-full before:right-0 before:bottom-0 before:absolute">
              <img
                className="object-cover rounded-full "
                src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                alt=""
              />
            </span>
            <span cls>Minh Tran</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
