import React, { useState } from "react";
import Logo from "../UI/Logo";
import InitialMain from "../SubComp/InitialMain";
import EnterGame from "../SubComp/EnterGame";
import ContainerA from "../UI/ContainerA";

const Initial = (props) => {
  const [enterGameClicked, setEnterGameClicked] = useState(false);

  const gameClickHandler = () => {
    setEnterGameClicked(true);
  };
  const gameBackHandler = () => {
    setEnterGameClicked(false);
  };

  return (
    <ContainerA classes={"items-center justify-center"}>
      <Logo classes={"text-[white] text-[5rem] "} />
      <div className="w-fit rounded-md border border-black bg-[white] p-3 shadow-lg ">
        {!enterGameClicked && (
          <InitialMain
            gameClickHandler={gameClickHandler}
            hostClickHandler={props.hostClickHandler}
          />
        )}
        {enterGameClicked && <EnterGame gameBackHandler={gameBackHandler} />}
      </div>
    </ContainerA>
  );
};

export default Initial;
