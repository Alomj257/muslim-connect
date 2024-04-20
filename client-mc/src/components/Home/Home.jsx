import React from "react";
import './Home.css'
import searchIcon from '../../assets/Home_assets/search-normal.png'
import rightImg from '../../assets/Home_assets/RightImg.png'
import rightImg2 from '../../assets/Home_assets/RightImg2.png'
import user from '../../assets/Home_assets/user.png'
import arrow from '../../assets/Home_assets/arrow.png'
import group from '../../assets/Home_assets/typcn_group.png'
import enclyco from '../../assets/Home_assets/mdi_encyclopedia.png'
import iconw from '../../assets/Home_assets/icon-park-solid_women.png'
import islam from '../../assets/Home_assets/maki_religious-muslim.png'
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
                    <div className="cbtn-container">
                        <h5 style={{ color: "#7C5399" }}>Populaire:</h5>
                        <div className="buttons">
                            <button class="cbtn">Islamic Finance</button>
                            <button class="cbtn">Patrimoine</button>
                            <button class="cbtn">Zakaat Al Maal</button>
                            <button class="cbtn">Arabic Course</button>
                            {/* <button class="cbtn">Button 17</button>
                            <button class="cbtn">Button 17</button>
                            <button class="cbtn">Button 17</button> */}
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <img src={rightImg} alt="Search Icon" />
                </div>
            </div>
            <div className="inside-container second">
                <h1 >Services populaires</h1>
                <h1 >sur notre plateforme</h1>
                <div className="cbtn-content">
                    <div className="cbtn-card">
                        <img src={user} alt="Img" style={{ width: "1.3rem" }}></img>
                        <p>Apprentissage religieux individuel</p>
                        <img src={arrow} alt="Img" style={{ width: "1.2rem" }}></img>
                    </div>
                    <div className="cbtn-card">
                        <img src={group} alt="Img"></img>
                        <p>Apprentissage religieux collectif</p>
                        <img src={arrow} alt="Img" style={{ width: "1.2rem" }}></img>
                    </div>
                    <div className="cbtn-card">
                        <img src={enclyco} alt="Img"></img>
                        <p>Encyclopedia</p>
                        <img src={arrow} alt="Img" style={{ width: "1.2rem" }}></img>
                    </div>
                    <div className="cbtn-card">
                        <img src={iconw} alt="Img"></img>
                        <p>Entre femmes</p>
                        <img src={arrow} alt="Img" style={{ width: "1.2rem" }}></img>
                    </div>
                    <div className="cbtn-card">
                        <img src={islam} alt="Img"></img>
                        <p>Thème spécifique de la consultation</p>
                        <img src={arrow} alt="Img" style={{ width: "1.2rem" }}></img>
                    </div>
                </div>
            </div>
            {/* Third portion */}
            <div className="inside-container">
                <div className="left-container">
                    <h2>Expertise, convivialité, sécurité, satisfaction garantie.</h2>
                </div>
                <div className="right-container">
                    <img src={rightImg2} alt="Search Icon" style={{ width: "30rem" }} />
                </div>
            </div>

        </div>
    );
};

export default HomeComponent;