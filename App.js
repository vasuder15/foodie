import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Header from './Header';
import CardsDetails from './CardsDetails';
import Cards from './Cards';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
   <Header />
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
  </>
  );
}

export default App;
