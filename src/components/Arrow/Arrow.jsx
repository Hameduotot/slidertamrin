import React from "react";

const Arrow = ({type}) => {
  return (
    <div className="arrow-wrapper">
      <div className="round">
        <div id="cta">
          <span className={`arrow ${type}`}></span>
        </div>
      </div>
    </div>
  );
};

export default Arrow;
