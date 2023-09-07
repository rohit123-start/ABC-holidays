
import './App.css';
import Plp from './components/Plp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pdp from './components/Pdp';
import Context from './context/Context';
import Oms from './components/Oms';
import Flight from './components/Procedure/Flight';
import Hotel from './components/Procedure/Hotel';
import Sightseeing from './components/Procedure/Sightseeing';
import Visa from './components/Procedure/Visa';
import Transfer from './components/Procedure/Transfer';
import Account from './components/Procedure/Account';
import Timer from './components/Timer';
import Orderpage from './components/Orderpage';

function App() {
  return (
    <div className="App">
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><Plp></Plp></div>}></Route>
          <Route path="/pdp" element={<div><Pdp></Pdp></div>}></Route>
          <Route path="/orderpage" element={<div><Orderpage></Orderpage></div>}></Route>
          <Route path="/oms" element={<div><Oms></Oms></div>}></Route>
          <Route path="/account" element={<div><Account></Account></div>}></Route>
          <Route path="/visa" element={<div><Visa></Visa></div>}></Route>
          <Route path="/flight" element={<div><Flight></Flight></div>}></Route>
          <Route path="/hotel" element={<div><Hotel></Hotel></div>}></Route>
          <Route path="/sightseeing" element={<div><Sightseeing></Sightseeing></div>}></Route>
          <Route path="/transfer" element={<div><Transfer></Transfer></div>}></Route>
          <Route path="/timer" element={<div><Timer></Timer></div>}></Route>
        </Routes>
      </BrowserRouter>
      
    </Context>
    </div>
  );
}

export default App;
