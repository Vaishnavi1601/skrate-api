import React from 'react';
import {Navigate} from 'react-router-dom';
import Footer from '../compnents/Footer';
import Nav from '../compnents/Nav';

export default function Home() {
  
  return (
    <>
      <Nav />
      <Navigate to="/add-user" />
      <Footer />
    </>
  )
}
