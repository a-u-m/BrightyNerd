import React from "react";
import ButtonA from "../UI/ButtonA";
import BackArrow from "../UI/BackArrow";

const EnterGame = (props) => {
  return (
    <React.Fragment>
      <BackArrow onClick={props.gameBackHandler} />
      <input
        className="m-3 mb-0 h-[5rem] w-[30rem] rounded border-[2px] border-black text-center text-[2.5rem] tracking-wide ring-[2px] ring-[black] ring-offset-1"
        placeholder="Game Code"
      />
      <ButtonA
        classes={
          "m-3 text-[white] bg-[#3c096c] ring-[2px] ring-[#240046] ring-offset-1"
        }
        content={"Enter"}
      />
    </React.Fragment>
  );
};

export default EnterGame;
