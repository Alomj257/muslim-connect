import React from "react";
import Profile from "../Student/Profile/Profile";
import Item from "../Item/Item"
const Consultant = () => {
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
                <div className="card items" style={{ marginTop: "4%" }}>
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </div>
    );
};

export default Consultant;
