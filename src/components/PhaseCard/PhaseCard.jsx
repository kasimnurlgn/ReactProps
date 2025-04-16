// Phase.jsx
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const PhaseCard = ({ image, title, description }) => {
  return (
    <div className="container border my-5 mx-auto rounded phase">
      <div className="row d-flex justify-content-between align-items-center my-3">
        <div className="col-12 col-md-4 border-end text-center">
          <img src={image} alt="" className="img-fluid pe-0" />
        </div>

        <div className="col-12 col-md-7">
          <div className="heading">
            <h1 className="fs-4 fw-bolder">{title}</h1>
          </div>

          <div className="description">
            <p>{description}</p>
          </div>
        </div>

        <div className="col-12 col-md-1 d-flex align-items-center justify-content-center">
          <FaAngleRight size={30} className="angle-right" />
        </div>
      </div>
    </div>
  );
};
export default PhaseCard;
