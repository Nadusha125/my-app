import './App.css';
import Home from './pages/home/Home.jsx';
import Basket from './pages/basket/Basket.jsx'
import Card from './pages/card/Card.jsx'
import Header from './components/header/Header.jsx'
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




  return (
    <>
    <Counter/>
    <Header searchData={searchData}/>
    <div className='Home-container'> 
      <Routes>
        <Route path="/"  element={<Home 
        searchProduct={searchProduct} 
        />} />
        <Route path="/basket" element={<Basket 
        />} />
        <Route path='/card/:id' element={<Card/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
