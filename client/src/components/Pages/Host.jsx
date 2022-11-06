import React from "react";
import ButtonXL from "../UI/ButtonXL";
import BackArrow from "../UI/BackArrow";

const Host = (props) => {
  return (
    <React.Fragment>
      <BackArrow onClick={props.hostBackHandler} />
      <div>
        <p>This is host</p>
      </div>
    </React.Fragment>
  );
};

export default Host;
