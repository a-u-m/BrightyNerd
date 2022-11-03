import React from "react";
import ButtonXL from "../UI/ButtonXL";
import Logo from "../UI/Logo";
import Credit from "../UI/Credit";

const Initial = () => {
  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center border border-black bg-[url('https://images.unsplash.com/photo-1638272181967-7d3772a91265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] ">
      <Logo classes={"text-[white] text-[5rem] "} />
      <div className="w-fit rounded-md border border-black bg-[white] p-3 shadow-lg ">
        <ButtonXL
          classes={
            "m-3 bg-[#7b2cbf] text-[white] ring-[2px] ring-[#3c096c] ring-offset-1"
          }
          content={"Host a Game"}
        />
        <ButtonXL
          classes={
            "m-3 text-[white] bg-[#3c096c] ring-[2px] ring-[#240046] ring-offset-1"
          }
          content={"Enter a Game"}
        />
      </div>
    </div>
  );
};

export default Initial;
