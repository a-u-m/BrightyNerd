import React from "react";
import ButtonXL from "../UI/ButtonXL";

const Initial = () => {
  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center border border-black bg-[#edf2f4]">
      <ButtonXL
        classes={"m-3 bg-[#8d99ae] ring-[3px] ring-[#2b2d42] ring-offset-1"}
        content={"Host a Game"}
      />
      <ButtonXL
        classes={
          "m-3 text-[white] bg-[#ef233c] ring-[3px] ring-[#d90429] ring-offset-1"
        }
        content={"Enter a Game"}
      />
    </div>
  );
};

export default Initial;
