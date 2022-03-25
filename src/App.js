import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import CountryListContainer from "./components/CountryListContainer";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<CountryListContainer />} />
          <Route exact path="/continent/:continentId" element={<CountryListContainer />} />
          <Route exact path="/country/:countryId" element={<CountryDetail />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
