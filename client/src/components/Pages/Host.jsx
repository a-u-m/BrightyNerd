import React from "react";
import ButtonXL from "../UI/ButtonXL";
import BackArrow from "../UI/BackArrow";
import ContainerA from "../UI/ContainerA";
import ContainerB from "../UI/ContainerB";
import Logo from "../UI/Logo";

const Host = (props) => {
  return (
    <React.Fragment>
      <BackArrow onClick={props.hostBackHandler} />
      <ContainerA classes={"justify-start items-center "}>
        <Logo classes={"text-[white] text-[5rem] "} />
        <ContainerB></ContainerB>
      </ContainerA>
      <div className="item item flex content-start"></div>
    </React.Fragment>
  );
};

export default Host;
