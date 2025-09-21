import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { AppContext } from "./context";
import Home from '../Components/home';
import About from '../Components/about';
import Counter from '../Components/counter';
import Counter2 from '../Components/counter2';
import AppAtlas from "../comp_atlas/appAtlas";
import PixaApp from "../pixa_comp/pixaApp";
import VipApp from "../vip_copm/vipApp";

export default function AppRoutes() {
  const [number, setNumber] = useState(33);
  const [coins, setCoins] = useState(6);
  const [counter, setCounter] = useState(0);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{
        val: "koko",
        number, setNumber,
        coins, setCoins,
        counter, setCounter
      }}>
        <header className="p-2 container bg-info d-flex gap-2">
          <div>Coins: {coins}</div>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/counter">Counter</Link> |
          <Link to="/counter2">Counter2</Link> |
          <Link to="/atlas">Atlas</Link> |
          <Link to="/pixa/cats">Pixa</Link> |
          <Link to="/vip">Vip</Link>
        </header>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counter2" element={<Counter2 />} />
          <Route path="/atlas" element={<AppAtlas />} />
          <Route path="/pixa/:term" element={<PixaApp />} />
          <Route path="/vip" element={<VipApp />} />
        </Routes>
      </AppContext.Provider>

      <footer className="p-2 container bg-danger">footer</footer>
    </BrowserRouter>
  );
}
