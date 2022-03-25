import React from "react";
import { Link } from "react-router-dom";

const Card = ({ country }) => {
  const { name, population, region, capital, flag, alpha3Code } = country;
  return (
    <div className="card">
      <Link to={"/country/" + alpha3Code}>
        <img src={flag} />
        <div>
          <h3>{name}</h3>
          <ul>
            <li>
              <b>Population: </b>{population}
            </li>
            <li>
              <b>Region: </b>{region}
            </li>
            <li>
              <b>Capital: </b>{capital}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Card;
