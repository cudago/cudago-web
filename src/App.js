import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Terms from './components/pages/Terms';

import ScrollToTop from './common/ScrollToTop';
import Footer from './components/pages/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
      

    </Router>
  );
}

export default App;