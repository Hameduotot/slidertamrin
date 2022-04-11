import React from "react";
import Arrow from "../Arrow/Arrow";
import Card from "../Card/Card";

const Main = () => {
  return (
    <div className="slide-container">
      <div className="wrapper">
        <Arrow type={"prev"} />
        <Card />
        <Arrow type={"next"} />
      </div>
    </div>
  );
};

export default Main;
