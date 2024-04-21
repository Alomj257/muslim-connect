import React from "react";
import './Learning.css'
import learningImg from "../../../assets/Student/learningImg.png"
import profileImg from "../../../assets/Student/Ellipse 21.png"
const Learning = () => {
    return (
        <div className="card cus">
            <img src={learningImg} className="lcart" />
            <img src={profileImg} className="profileImg" />
            <p style={{ fontWeight: "bold" }}>Ayesha Ali</p>
        </div>
    )
};
export default Learning