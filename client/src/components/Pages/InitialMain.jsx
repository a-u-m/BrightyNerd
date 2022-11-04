import React from "react";
import ButtonXL from "../UI/ButtonXL";

const InitialMain = (props) => {
  return (
    <React.Fragment>
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
        content={"Join a Game"}
        onClick={props.gameClickHandler}
      />
    </React.Fragment>
  );
};

export default InitialMain;
