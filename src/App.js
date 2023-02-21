import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Header from './components/Header/Header';
import HomePage from './components/Homepage/homePage';
import Dream11FrontPage from './components/upcomingMatch/match';
import Signup from './components/signUp/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} ></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </Router>

    </div>
  );
}
export default App;