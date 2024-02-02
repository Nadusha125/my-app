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
import Counter from './components/Counter.jsx';




function App() {

const [searchProduct, saetSerchProduct] = useState('')

  const searchData = (searcgWord) =>  {
    saetSerchProduct(searcgWord)
  }

const [basket, setBasket] = useState ([])

const getBasket = (basketgg) => {
  console.log('basketgg', basketgg)
  setBasket(basketgg)
}


  return (
    <>
    <Counter/>
    <Header searchData={searchData}/>
    <div className='Home-container'> 
      <Routes>
        <Route path="/"  element={<Home 
        searchProduct={searchProduct} 
        getBasket= {getBasket}
        />} />
        <Route path="/basket" element={<Basket 
        basket={basket}
        />} />
        <Route path='/card/:id' element={<Card/>}/>
        <Route path="/sale" element={<Sale/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
