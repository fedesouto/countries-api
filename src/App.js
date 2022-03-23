import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CountryListContainer from "./components/CountryListContainer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route exact path="/" element={<CountryListContainer />}/>
        <Route exact path="/:region" element={<CountryListContainer />}/>
      </BrowserRouter>
    </div>
  );
};

export default App;
