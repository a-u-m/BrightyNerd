import React from "react";

const ButtonB = (props) => {
  return (
    <React.Fragment>
      <button
        className={`m-3 flex h-[5rem] flex-1 content-center items-center justify-center rounded-lg  text-[white] shadow-md ring-[2px] ring-[#3c096c] ring-offset-1  hover:bg-[#3c096c] ${props.classes}`}
        onClick={props.onClick}
      >
        {props.content}
      </button>
    </React.Fragment>
  );
};

export default ButtonB;
