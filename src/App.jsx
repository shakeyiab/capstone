import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Home from '../components/home';
import notfound from '../components/Notfound';
import subscribe from '../components/Subscribe';
import Worldnews from '../components/Worldnews';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/nav';
import Subscribe from '../components/Subscribe';
import Notfound from '../components/Notfound';



function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Send a GET request to the backend API
    axios.get('http://localhost:3000/api/message')
      .then(response => {
        setMessage(response.data.message); // Set the message received from the backend
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/worldnews' element={<Worldnews />} />
      <Route path='/Subscribe' element={<Subscribe />} />
      <Route path='/notfound' element={<Notfound />} />
    </Routes>
  </main>
);
}
 

export default App;
