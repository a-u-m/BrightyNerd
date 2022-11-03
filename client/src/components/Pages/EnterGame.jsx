import React from "react";
import ButtonXL from "../UI/ButtonXL";

const EnterGame = () => {
  return (
    <React.Fragment>
        <input className="text-[2rem] border-[2px] border-black ring-offset-1 ring-[2px] ring-[black] w-[30rem] m-3 h-[5rem] rounded text-center" placeholder="Enter Game Code" />
        <ButtonXL
          classes={
            "m-3 text-[white] bg-[#3c096c] ring-[2px] ring-[#240046] ring-offset-1"
          }
          content={"Enter"}
        />
    </React.Fragment>
  );
};

export default EnterGame;
