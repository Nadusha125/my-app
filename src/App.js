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




function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/basket" element={<Basket/>} />
        <Route path='/card/:id' element={<Card/>}/>
        <Route path="/sale" element={<Sale/>} />
      </Routes>
    </>
  );
}

export default App;
