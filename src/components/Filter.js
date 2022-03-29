import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Filter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { continentId } = useParams();

  const continents = [
    { id: 1, name: "Africa", link: "/continent/africa" },
    { id: 2, name: "America", link: "/continent/americas" },
    { id: 3, name: "Asia", link: "/continent/asia" },
    { id: 4, name: "Europe", link: "/continent/europe" },
    { id: 5, name: "Oceania", link: "/continent/oceania" },
    { id: 6, name: "All", link: "/" },
  ];
  return (
    <div className="dropdown">
      <button
        className="dropdown-toggler"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {continentId
          ? continentId.charAt(0).toLocaleUpperCase() + continentId.slice(1)
          : "Filter by Region"}
      </button>
      <div className={"dropdown-content " + (showDropdown && "show")}>
        <ul>
          {continents.map(({ id, name, link }) => {
            return (
              <Link key={id} to={link} onClick={() => setShowDropdown(!showDropdown)}>
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
