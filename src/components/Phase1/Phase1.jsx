import React from "react";
import img1 from "../../assets/icon-phase-1.png";
import { FaAngleRight } from "react-icons/fa";

const Phase1 = () => {
  return (
    <div className="container border my-5 mx-auto rounded phase">
      <div className="row d-flex justify-content-between align-items-center my-3">
        <div className="col-12 col-md-4 border-end  text-center">
          <img
            src={img1}
            alt="Icon for Phase 1: Building Static Websites"
            className="img-fluid pe-0"
          />
        </div>

        <div className="col-12 col-md-7">
          <div className="heading">
            <h1 className="fs-4 fw-bolder">
              Phase 1: Building static websites using HTML, CSS & Bootstrap
            </h1>
          </div>

          <div className="description">
            <p>
              In this phase, you'll learn about the underlying structure of the
              web - HTML. You'll also learn how to apply styling to a website
              through CSS. To help you build websites faster and easier, you
              will learn the Bootstrap framework. Along the way, you'll also
              learn about VS Code editor and Chrome's Developer Tools.
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

export default Phase1;
