import React from "react";

const ContainerB = (props) => {
  return (
    <div className="h-fit w-3/4 rounded border border-white p-4 ">
      {props.children}
    </div>
  );
};

export default ContainerB;
