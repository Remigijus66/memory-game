
import './App.css';
// import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';


import { updateName } from './store/generelStore'
// import Ground from './components/Ground';
import Cards from './components/Cards.js';



function App() {


  return (


    <div style={{ backgroundColor: 'green', height: '1000px' }}>


      <Cards />

    </div >
  );
}

export default App;
