import React from "react";

function Navbar() {
  const navitems = [
    "Découvrir",
    "S'inscrire en tant que consultant",
    "S'inscrire en tant qu'étudiant",
  ];
  return (
    <div>
      <nav class="navbar sticky-top bg-light">
        <div class="container-fluid">
          <img src="" alt="LOGO" srcset="" />

          <div className="d-flex align-items-center">
            <ul className="list-unstyled d-flex align-items-center fs-6 mx-2">
              {navitems.map((e, i) => {
                return (
                  <li className="mx-3" key={i}>
                    {e}
                  </li>
                );
              })}
            </ul>

            <button
              class="btn text-light m-2"
              type="button"
              style={{ backgroundColor: "rgb(124, 83, 153)" }}
            >
              Connectez-vous
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
