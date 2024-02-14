import './App.css';
import Home from './pages/home/Home.jsx';
import Basket from './pages/basket/Basket.jsx'
import Card from './pages/card/Card.jsx'
import Header from './components/header/Header.jsx'
import {
  Route,
  Routes,
} from "react-router-dom";




function App() {


  return (
    <>
    <Header />
    <div className='Home-container'> 
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/basket" element={<Basket/>} />
        <Route path='/card/:id' element={<Card/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
