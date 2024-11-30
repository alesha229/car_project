import { useState, useEffect } from "react";
import Menu from "./components/Menu/Menu";
import MainSection from "./components/MainSection/MainSection";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm/SearchForm";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/search-car" element={<SearchForm />} />
      </Routes>
      <Preloader onLoadingComplete={() => setIsLoading(false)} />
    </>
  );
}

export default App;
