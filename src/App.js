import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Services from './components/pages/Services';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/Products'  Component={Products} />
          <Route path='/Services'  Component={Services} />
          <Route path='/sign-up'  Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
