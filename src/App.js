import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path='/' exact Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;