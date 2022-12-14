import React from "react";

const ButtonA = (props) => {
  return (
    <React.Fragment>
      <button
        className={`flex h-[5rem] w-[30rem] content-center items-center justify-center rounded-sm border border-white shadow-md  hover:brightness-125 ${props.classes}`}
        onClick={props.onClick}
      >
        {props.content}
      </button>
    </React.Fragment>
  );
};

export default ButtonA;
