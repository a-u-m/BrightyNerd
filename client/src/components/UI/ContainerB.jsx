import React from "react";

const ContainerB = (props) => {
  return (
    <div className="h-fit w-3/4 rounded bg-[white] shadow-md ">
      {props.children}
    </div>
  );
};

export default ContainerB;
