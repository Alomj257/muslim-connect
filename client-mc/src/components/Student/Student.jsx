import React from "react";
import './Student.css'
import profilePic from '../../assets/Student/Ellipse 21.png'

const Student = () => {
    return (
        <div className="student-container">
            <div className="profile-container">
                <div class="profile-picture">
                    <img src={profilePic} alt="Profile Picture" />
                </div>
                <div class="profile-info">
                    <h2>John Doe</h2>
                    <p>Role: Developer</p>
                </div>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget risus enim. Nullam faucibus, ligula non mattis accumsan, velit felis volutpat arcu, nec hendrerit metus lectus et leo.</p>
                </div>
            </div>

            <h2 className="text-center"> welcome to Student</h2>
        </div>
    );
};

export default Student;
