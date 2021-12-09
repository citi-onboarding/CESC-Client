import React from 'react';
import { Logo } from '../src/assets'
import './style.css';
import {Card} from "./Components"
import NavBar from './Pages/NavBar/navbar';
import {Whoweare} from '../src/Pages/index';


const App = () => {
  return (
    <div className="App">

    <NavBar></NavBar>
    <Whoweare></Whoweare>
      
    </div>
)
  }

      

export default App;
