import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
const ProgressComp = () => {
  return (
    <div className="progress1 pt-5">
      <div className="d-flex pregress-comp-bar align-items-center">
        <div className="d-flex align-items-center w-100  text-center">
          <span className="navbar-active">
            <FaRegDotCircle size={20} />
          </span>
          <div className="progress-line w-100"></div>
        </div>
        <div className="d-flex align-items-center w-100">
          <span>
            <FaRegDotCircle size={20} />
          </span>
          <div className="progress-line w-100"></div>
        </div>
        <div className="d-flex align-items-center w-100">
          <span className="">
            <FaRegDotCircle size={20} />
          </span>
          <div className="progress-line w-100"></div>
        </div>
        <div className="d-flex align-items-center w-100">
          <span>
            <FaRegDotCircle size={20} />
          </span>
          <div className="progress-line w-100"></div>
          <span>
            <FaRegDotCircle size={20} />
          </span>
        </div>
      </div>
      <div className="d-flex align-items-center gap-2 progress-content justify-content-center ">
        <div className="w-100 text-center navbar-active">
          <div className=" fw-semibold">Sélection de thèmes</div>
          <small style={{ fontSize: "13px" }}>
            Sélectionnez un thème, donnez un titre
          </small>
        </div>
        <div className="w-100 text-center">
          <div className="text-muted fw-semibold">Sélection de thèmes</div>
          <small style={{ fontSize: "13px" }}>
            Sélectionnez un thème, donnez un titre
          </small>
        </div>
        <div className="w-100 text-center">
          <div className="text-muted fw-semibold">Sélection de thèmes</div>
          <small style={{ fontSize: "13px" }}>
            Sélectionnez un thème, donnez un titre
          </small>
        </div>
        <div className="w-100 text-center">
          <div className="text-muted fw-semibold">Sélection de thèmes</div>
          <small style={{ fontSize: "13px" }}>
            Sélectionnez un thème, donnez un titre
          </small>
        </div>
        <div className="w-100 text-center">
          <div className="text-muted fw-semibold">Sélection de thèmes</div>
          <small style={{ fontSize: "13px" }}>
            Sélectionnez un thème, donnez un titre
          </small>
        </div>
      </div>
    </div>
  );
};

export default ProgressComp;
