import './App.css';
import Home from './pages/home/Home.jsx';
import Basket from './pages/basket/Basket.jsx'
import Card from './pages/card/Card.jsx'
import Header from './components/header/Header.jsx'
import Sale from './pages/sale/Sale.jsx';
import {
  Route,
  Routes,
} from "react-router-dom";
import { useState } from 'react';




function App() {

const [searchProduct, saetSerchProduct] = useState('')

  const searchData = (searcgWord) =>  {
    saetSerchProduct(searcgWord)
  }

  return (
    <>
    <Header searchData={searchData}/>
      <Routes>
        <Route path="/"  element={<Home searchProduct={searchProduct}/>} />
        <Route path="/basket" element={<Basket/>} />
        <Route path='/card/:id' element={<Card/>}/>
        <Route path="/sale" element={<Sale/>} />
      </Routes>
    </>
  );
}

export default App;
