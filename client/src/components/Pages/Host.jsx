import React, { useState } from "react";
import ButtonB from "../UI/ButtonB";
import BackArrow from "../UI/BackArrow";
import ContainerA from "../UI/ContainerA";
import ContainerB from "../UI/ContainerB";
import Logo from "../UI/Logo";

const Host = (props) => {
  const [hostDetails, setHostDetails] = useState({ questions: "" });

  const questionHandler = (res) => {
    setHostDetails((prevState) => {
      return { ...prevState, questions: res.value };
    });
    console.log(hostDetails);
  };

  return (
    <React.Fragment>
      <BackArrow onClick={props.hostBackHandler} />
      <ContainerA classes={"justify-start items-center "}>
        <Logo classes={"text-[white] text-[5rem] "} />
        <ContainerB className="flex ">
          <div className="flex flex-row flex-wrap justify-evenly">
            <ButtonB
              content="5 Questions"
              classes={
                hostDetails.questions === "5" ? "bg-[#3c096c]" : "bg-[#7b2cbf]"
              }
              onClick={questionHandler.bind(this, { value: "5" })}
            />
            <ButtonB
              content="10 Questions"
              classes={
                hostDetails.questions === "10" ? "bg-[#3c096c]" : "bg-[#7b2cbf]"
              }
              onClick={questionHandler.bind(this, { value: "10" })}
            />
            <ButtonB
              content="15 Questions"
              classes={
                hostDetails.questions === "15" ? "bg-[#3c096c]" : "bg-[#7b2cbf]"
              }
              onClick={questionHandler.bind(this, { value: "15" })}
            />
            <ButtonB
              content="20 Questions"
              classes={
                hostDetails.questions === "20" ? "bg-[#3c096c]" : "bg-[#7b2cbf]"
              }
              onClick={questionHandler.bind(this, { value: "20" })}
            />
          </div>
        </ContainerB>
      </ContainerA>
      <div className="item item flex content-start"></div>
    </React.Fragment>
  );
};

export default Host;
