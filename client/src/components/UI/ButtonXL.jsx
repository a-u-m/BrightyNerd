import React from "react";

const ButtonXL = (props) => {
  return (
    <React.Fragment>
      <button
        className={
          "flex h-[5rem] w-1/3 content-center items-center justify-center rounded-lg shadow-md " +
          props.classes
        }
      >
        {props.content}
      </button>
    </React.Fragment>
  );
};

export default ButtonXL;
