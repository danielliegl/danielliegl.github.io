import {useState} from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Highlight from './components/Highlight';

function App() {

  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <Highlight></Highlight>
    <div className="container">
    </div>
    </>
  );
}

export default App;
