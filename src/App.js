import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './components/Photo'
import Nav from './components/Nav'
import NotFound from './components/NotFound'
import Form from './components/Form'
import PhotoContainer from './components/PhotoContainer'

function App() {
  return (
    <div className="container">

      <Form />

      <Nav />

      <PhotoContainer />

    </div>
  );
}

export default App;
