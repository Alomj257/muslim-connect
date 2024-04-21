import React from "react";
import './Profile.css'
import profilePic from '../../../assets/Student/Ellipse 21.png'

const Profile = () => {
    return (
        <div className="profile-container">
            <div class="profile-picture">
                <img src={profilePic} alt="Profile Picture" />
            </div>
            <div class="profile-info">
                <h5>Muhammad Haseeb</h5>
                <p>Loyality Rank: <span style={{ color: "#8F5F03", fontWeight: "light" }}>Developer</span></p>
            </div>
            <div class="description">
                <h6>Description</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget risus enim. Nullam faucibus, ligula non mattis accumsan, velit felis volutpat arcu, nec hendrerit metus lectus et leo.</p>
            </div>
            <hr style={{ width: "100%" }} />
            <div class="details">
                <h6>Education</h6>
                <p style={{ fontWeight: "bold" }}>B.Sc - BS Computer Science</p>
                <p>COMSATS University, Pakistan.</p>
            </div>
            <div class="details">
                <h6>Language</h6>
                <p ><span style={{ fontWeight: "bold" }}>English -</span> Fluent</p>
                <p ><span style={{ fontWeight: "bold" }}>French -</span> Native</p>
            </div>
            <div class="details">
                <h6>Interest</h6>
                <p style={{ fontWeight: "bold" }}>Islamic finance</p>
                <p style={{ fontWeight: "bold" }}>Arabic Course</p>

            </div>
        </div>
    );
};

export default Profile;
