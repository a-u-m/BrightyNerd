import React, { useState } from "react";
import Initial from "./Initial";
import Logo from "../UI/Logo";
import InitialMain from "../SubComp/InitialMain";
import EnterGame from "../SubComp/EnterGame";
import Host from "./Host";

const Main = () => {
  const [hostFrame, setHostFrame] = useState(false);
  const hostClickHandler = () => {
    setHostFrame(true);
  };
  const hostBackHandler = () => {
    setHostFrame(false);
  };

  return (
    <React.Fragment>
      {hostFrame && <Host hostBackHandler={hostBackHandler} />}
      {!hostFrame && <Initial hostClickHandler={hostClickHandler} />}
    </React.Fragment>
  );
};

export default Main;
