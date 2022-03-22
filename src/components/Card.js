import React from "react";

const Card = ({country}) => {
    const {name, population, region, capital, flag} = country;
  return (
    <div className="card">
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
    </div>
  );
};

export default Card;
