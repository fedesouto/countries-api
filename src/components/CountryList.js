import React, { useEffect, useState } from "react";
import Card from "./Card";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((json) => setCountries(json));
  }, [countries]);
  return (
    <div className="country-list">
      {countries &&
        countries.map((country) => {
          return <Card country={country} key={countries.indexOf(country)} />;
        })}
    </div>
  );
};

export default CountryList;
