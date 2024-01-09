import {Cube} from "../../types";
import React from "react";

const DrawBoard: React.FC<Cube> = (
  {
    id,
    hasItem,
    clicked,
    openCube,
  }) => {

  let color = "colorWhite";
  if(clicked) color = "colorBlack";
  if(hasItem) {
    return <div onClick={openCube} className={`cube ${color}`}><span className={"ring"}></span></div>
  }
  return (
    <div onClick={openCube} className={`cube ${color}`}></div>
  );
};

export default DrawBoard;