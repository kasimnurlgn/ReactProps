import React from "react";
import img2 from "../../assets/icon-phase-2.png";
import { FaAngleRight } from "react-icons/fa";

const Phase2 = () => {
  return (
    <div className="container border mx-auto rounded phase">
      <div className="row d-flex justify-content-between align-items-center my-3">
        <div className="col-12 col-md-4 border-end  text-center">
          <img
            src={img2}
            alt="Icon for Phase 1: Building Static Websites"
            className="img-fluid pe-0"
          />
        </div>

        <div className="col-12 col-md-7">
          <div className="heading">
            <h1 className="fs-4 fw-bolder">
              Phase 2: Learn coding with JavaScript
            </h1>
          </div>

          <div className="description">
            <p>
              JavaScript is among the most powerful and flexible programming
              languages of the web. It powers the dynamic behavior on most
              websites. In this phase of your course, you will learn programming
              fundamentals using the latest JavaScript syntax. The concepts
              covered in these lessons lay the foundation for using JavaScript
              in any environment.
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

export default Phase2;
