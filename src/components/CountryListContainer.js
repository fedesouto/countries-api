import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryList from "./CountryList";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import SearchError from "./SearchError";

const CountryListContainer = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();

  const { continentId } = useParams();

  const getCountries = () => {
    if (search) {
      fetch("https://restcountries.com/v2/name/" + search)
        .then((res) => (res.status === 404 ? setCountries(null) : res.json()))
        .then((json) => setCountries(json));
    } else if (continentId) {
      fetch("https://restcountries.com/v2/region/" + continentId)
        .then((res) => (res.status === 404 ? setCountries(null) : res.json()))
        .then((json) => setCountries(json));
    } else {
      fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((json) => setCountries(json));
    }
  };

  useEffect(() => {
    getCountries();
  }, [search, continentId]);

  return (
    <div className="main">
      <div className="sub-header">
        <SearchBar search={search} setSearch={setSearch} />
        <Filter />
      </div>
      {countries ? (
        <CountryList countries={countries} />
      ) : (
        <SearchError search={search} />
      )}
    </div>
  );
};

export default CountryListContainer;
