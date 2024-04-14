import React from "react";
import SearchSvg from "../assets/Nav_assets/search_svg";
function Popular_Service() {
  return (
    <div className="d-flex w-100  justify-content-between ">
      <div className="">
        <h1 className="fs-1 text-wrap">
          Trouvez immédiatement l’expertise dont vous avez besoin
        </h1>

        <div>
          <SearchBar />
          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-5">Populaire:</span>
            <PopularSuggitions text="Finance Islamique" />
            <PopularSuggitions text="Patrimoine" />
            <PopularSuggitions text="Zakât Al Maal" />
            <PopularSuggitions text="Cours d'arabe" />
          </div>
        </div>
      </div>
      <div className="">
        2<h1>serdtfyguhijokwaesrdtfyguhijdrftgyhujiokp</h1>
      </div>
    </div>
  );
}

export default Popular_Service;

const SearchBar = () => {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Rechercher un service"
        aria-label="Rechercher un service"
        aria-describedby="button-addon2"
        style={{ borderRight: "none" }}
      />
      <button
        class="btn"
        type="button"
        id="button-addon2"
        style={{
          border: "1px solid rgb(222, 226, 230)",
          borderLeft: "none",
        }}
      >
        <SearchSvg />
      </button>
    </div>
  );
};

const PopularSuggitions = ({ text }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <span className="fs-6 rounded-pill border border-secondary p-3 fw-light">
        {text}
      </span>
    </div>
  );
};
