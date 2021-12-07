import React from 'react';
import { Logo } from '../src/assets'
import './style.css';
import {Card} from "./Components"
import NavBar from './Pages/NavBar/navbar';
import { navbarpicture } from '../src/assets';

const App = () => {
  return (
    <div className="App">
      <NavBar src={ navbarpicture }/>
      
    </div>
)
  }

export default App;
