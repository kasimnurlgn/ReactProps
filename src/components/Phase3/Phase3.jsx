import React from "react";
import img3 from "../../assets/icon-phase-3.png";
import { FaAngleRight } from "react-icons/fa";

const Phase3 = () => {
  return (
    <div className="container border my-5 mx-auto rounded phase">
      <div className="row d-flex justify-content-between align-items-center my-3">
        <div className="col-12 col-md-4 border-end  text-center">
          <img
            src={img3}
            alt="Icon for Phase 1: Building Static Websites"
            className="img-fluid pe-0"
          />
        </div>

        <div className="col-12 col-md-7">
          <div className="heading">
            <h1 className="fs-4 fw-bolder">
              Phase 3: Node, Express, MySql and React.js
            </h1>
          </div>

          <div className="description">
            <p>
              React is a JavaScript library, developed in 2013 by Facebook. It
              is very popular and used on major sites including on Facebook,
              Netflix, Khan Academy and many others. In this phase, we will
              start from the fundamentals and go all the way up to building full
              applications with custom styling. Along the way, you'll also learn
              about npm, ES6, Node.js, Express and MySql.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-1 d-flex align-items-center justify-content-center ">
          <FaAngleRight size={30} className="angle-right" />
        </div>
      </div>
    </div>
  );
};

export default Phase3;
