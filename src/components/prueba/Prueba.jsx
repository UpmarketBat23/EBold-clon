import React from "react";
import "./Prueba.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Prueba() {
  return (
    <div className='search-box mt-4'>
      <input className='search-input' type='text' placeholder='Search' />
      <FontAwesomeIcon
        className='fa-solid fa-magnifying-glass'
        icon={faSearch}
      />
    </div>
  );
}

export default Prueba;
