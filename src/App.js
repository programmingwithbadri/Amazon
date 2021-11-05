import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
