import React from 'react';
import ErrorScreen from './Screens/ErrorScreen'
import RepoScreen from './Screens/RepoScreen'
import './App.css';
import HomeScreen from './Screens/HomeScreen';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return(
    <Router>
      <div>
        <nav className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/RepoScreen">My GitHub Repos</Link>
          <Link to="/ErrorScreen">Error</Link>
        </nav>

        <Routes>
          <Route path="/" element = {<HomeScreen />} />
          <Route path="/RepoScreen" element = {<RepoScreen/>} />
          <Route path="/ErrorScreen" element = {<ErrorScreen/>} />
        </Routes>
      </div>  
    </Router>
  )

}

export default App
