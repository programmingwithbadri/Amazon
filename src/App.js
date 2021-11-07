import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <><Header /><Home /></>
          } />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
