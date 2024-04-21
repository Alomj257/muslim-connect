import React from "react";
import './Learning.css'
import learningImg from "../../../assets/Student/learningImg.png"
import profileImg from "../../../assets/Student/Ellipse 21.png"
const Learning = () => {
    return (
        <div className="card cus">
            <img src={learningImg} className="lcart" />
            <img src={profileImg} className="profileImg" />
            <p style={{ fontWeight: "bold", marginLeft: "-30px" }}>Ayesha Ali</p>
            <div><p>Price</p>
                <p style={{ fontWeight: "bold" }}>
                    $56
                </p>
            </div>
            <div><p>Schedule on</p>
                <p style={{ fontWeight: "bold" }}>
                    4/3/2024
                </p>
            </div>
            <div><p>Status</p>
                <div className="cbtn sbtn">
                    In Progress
                </div>
            </div>
        </div>
    )
};
export default Learning