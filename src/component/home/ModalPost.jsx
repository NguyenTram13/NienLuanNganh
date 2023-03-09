import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";

export default function ModalPost() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <input
        variant="outlined"
        color="neutral"
        placeholder="what on your mind?, Ngoc tram"
        className="w-full bg-gray-200 hover:bg-gray-100 rounded-full p-3"
        onClick={() => setOpen(true)}
      />

      <Modal
        className="bg-[rgba(0,0,0,0.1)]"
        aria-labelledby="close-modal-title"
        open={open}
        onClose={(event) => {
          alert(
            "Bạn chắc chắn muốn thoát. Nếu thoát chỉnh sủa của bạn sẽ bị mất!"
          );
          setOpen(false);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            minWidth: 300,
            borderRadius: "md",
            p: 3,
          }}
        >
          <ModalClose variant="outlined" />
          <div className="ư-full">
            <h2 className="text-center p-2 font-bold">CREATE POST</h2>
            <hr />
            <div className="p-3">
              <div className=" flex  gap-3 ">
                <span className="w-[50px] rounded-lg ">
                  <img
                    className="object-cover rounded-full "
                    src="https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/326378473_3474461409546435_4064036737346974090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_J71lVUGtbAAX9Rd1GM&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCC1LOIOohl2K3E6cIgfJdnPU8Wg9hYLjuk2wiXw1jQDw&oe=640B1F58"
                    alt=""
                  />
                </span>
                <div className="py-2">
                  <div>
                    <h4 className="text-l font-bold ">Nguyễn banhs us</h4>
                    <select
                      name=""
                      className="outline-onne focus:outline-none bg-gray-200 rounded-lg px-3"
                      id=""
                    >
                      <option value="">
                        <PublicTwoToneIcon></PublicTwoToneIcon>Public
                      </option>
                      <option value="">Privite</option>
                    </select>
                  </div>
                </div>
              </div>
              <textarea
                className="w-ful text-2xl p-3 rounded-lg"
                name=""
                id=""
                cols="40"
                rows="5"
                placeholder="What's on your mind? Ngọc Trâm."
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-600 cursor-pointer"
              >
                Post
              </button>
            </div>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
