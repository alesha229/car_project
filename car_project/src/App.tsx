import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { fetchAllCars } from "./store/slices/сarSlice";
import Menu from "./components/Menu/Menu";
import MainSection from "./components/MainSection/MainSection";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm/SearchForm";
import Preloader from "./components/Preloader/Preloader";
import PageTransition from "./components/PageTransition/PageTransition";
import { useScrollRestoration } from "./hooks/useScrollRestoration";
import { useAppSelector } from "./store/store";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useAppSelector(state => state.cars);
  
  // Передаем статус загрузки данных в хук
  useScrollRestoration(status === 'success' && !isLoading);

  useEffect(() => {
    const initApp = async () => {
      await dispatch(fetchAllCars());
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    initApp();
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <Preloader onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Menu />
          <PageTransition>
            <Routes>
              <Route path="/" element={<MainSection />} />
              <Route path="/searchcar" element={<SearchForm />} />
              <Route path="/search" element={<SearchForm />} />
              <Route path="/profile" element={<div>Личный кабинет</div>} />
            </Routes>
          </PageTransition>
        </>
      )}
    </>
  );
}

export default App;
