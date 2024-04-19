import React from "react";
import './Home.css'
import searchIcon from '../../assets/Home_assets/search-normal.png'
const HomeComponent = () => {
    return (
        <div className="Home-content">
            <div className="inside-container">

                <div className="left-container">
                    <h1>Trouvez <span style={{ color: "#7C5399" }}>immédiatement</span> l’expertise dont vous avez besoin</h1>
                    <div className="search-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search..."
                        // value={searchTerm}
                        // onChange={handleInputChange}
                        />
                        <div className="search-icon" >
                            <img src={searchIcon} alt="Search Icon" />
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <h1>Trouvez immédiatement l’expertise dont vous avez besoin</h1>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;