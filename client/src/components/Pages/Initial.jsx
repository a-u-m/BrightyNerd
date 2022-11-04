import React, { useState } from "react";
import Logo from "../UI/Logo";
import InitialMain from "./InitialMain";
import EnterGame from "./EnterGame";

const Initial = () => {
  const [enterGameClicked, setEnterGameClicked] = useState(false);
  const gameClickHandler = () => {
    setEnterGameClicked(true);
  };
  const gameBackHandler = () => {
    setEnterGameClicked(false);
  };
  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center border border-black bg-[url('https://images.unsplash.com/photo-1638272181967-7d3772a91265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] ">
      <Logo classes={"text-[white] text-[5rem] "} />
      <div className="w-fit rounded-md border border-black bg-[white] p-3 shadow-lg ">
        {enterGameClicked ? (
          <EnterGame gameBackHandler={gameBackHandler} />
        ) : (
          <InitialMain gameClickHandler={gameClickHandler} />
        )}
      </div>
    </div>
  );
};

export default Initial;
