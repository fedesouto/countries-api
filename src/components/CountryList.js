import React from "react";
import Card from "./Card";

const CountryList = ({countries}) => {
  
  return (
    <div className="country-list">
      {countries.map((country) => {
          return <Card country={country} key={countries.indexOf(country)} />;
        })}
    </div>
  );
};

export default CountryList;
