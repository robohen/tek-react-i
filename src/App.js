import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
