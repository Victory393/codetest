import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import Nav from './components/header/nav'
import Home from './pages/home';
import About from './pages/about'
import Contact from './pages/contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';

function App() {
  return (
    <div>
      <Router>
       <nav className='nav'>
    <ul className='navlist'>
        <li className='navitems'><Link to="/">Home</Link></li>
        <li className='navitems'><Link to="/about">About</Link></li>
        <li className='navitems'><Link to="/contact">Contact</Link></li>
        
    </ul>
</nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
