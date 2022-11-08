import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import CountryListContainer from "./components/CountryListContainer";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/theme.context";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<CountryListContainer />} />
          <Route
            exact
            path="/continent/:continentId"
            element={<CountryListContainer />}
          />
          <Route exact path="/country/:countryId" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
