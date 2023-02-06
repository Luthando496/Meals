import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Food from './Pages/Food';
import SingleProduct from './Pages/SingleProduct';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/food" element={<Food />} />
      <Route path="/food/single/:id" element={<SingleProduct />} />
    </Routes>
    

   
    </Router>
  );
}

export default App;
