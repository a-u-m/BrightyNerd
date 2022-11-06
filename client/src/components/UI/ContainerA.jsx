import React from "react";

const ContainerA = (props) => {
  return (
    <div
      className={` flex h-screen w-full flex-col  border border-black bg-[url('https://images.unsplash.com/photo-1638272181967-7d3772a91265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] ${props.classes}`}
    >
      {props.children}
    </div>
  );
};

export default ContainerA;
