import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          {/* <Route path='/services' element={<h1>Services</h1>} />
          <Route path='/products' element={<h1>Products</h1>} />
          <Route path='/sign-up' element={<h1>Sign Up</h1>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;