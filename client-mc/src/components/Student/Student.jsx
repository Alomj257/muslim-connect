import React from "react";
import './Student.css'
import Profile from "./Profile/Profile";
import Learning from "./ActiveLearning/Learning";

const Student = () => {
    return (
        <div className="student-container">
            <div>
                <Profile />
            </div>
            <div className="about-container">
                <div className="big-btn">
                    <h4 style={{ color: "white", margin: "0" }}>Unlock Exclusive Benefits with Subscription!</h4>
                    <div>
                        <h6>Join Our Community of Dedicated Learners and Experts"</h6>
                        <button type="button" className="btn btn-success" style={{ backgroundColor: "#6FAE9C" }}>
                            Subscribe Now
                        </button>
                    </div>
                </div>
                <div className="act-learning">
                    <div className="card">
                        <h6>Active Learnings - 2</h6>
                    </div>
                    <Learning />
                </div>
            </div>
        </div>
    );
};

export default Student;
