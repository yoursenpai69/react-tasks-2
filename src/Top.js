import React from "react";
import "./Top.css";
import Buttons from "./Buttons";
const Top = () => {
  return (
    <div className="top">
      <div className="first-row">
        <div className="first-num">
          <span className="number">8.4M</span>
          <p className="number-sub">
            Lorem, ipsum dolor <br />
            sit amet consectetur
            <br /> adipisicing labore elit.
          </p>
        </div>
        <div className="second-num">
          <span className="number">7.9M</span>
          <p className="number-sub">
            Lorem, ipsum dolor <br />
            sit amet consectetur
            <br /> adipisicing labore elit.
          </p>
        </div>
        <div>
          <Buttons />
        </div>
      </div>
      <div className="sec-row">
        <div className="third-num">
          <span className="number">33.6M</span>
          <p className="number-sub-bot">
            Lorem, ipsum dolor consectetur <br />
            sit amet consectetur
            <br /> adipisicing labore elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Top;
