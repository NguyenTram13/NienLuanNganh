import React from "react";
import HomeCenter from "../../component/home/HomeCenter";
import HomeLeft from "../../component/home/HomeLeft";
import HomeRight from "../../component/home/HomeRight";

const Home = () => {
  return (
    <div className="flex justify-between w-full px-4 mt-20">
      <HomeLeft></HomeLeft>
      <HomeCenter></HomeCenter>
      <HomeRight></HomeRight>
    </div>
  );
};

export default Home;
