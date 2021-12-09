import React from 'react';
import OurPartners from './Pages';
import { Logo } from '../src/assets'
import './style.css';
import {Card} from "./Components"
import NavBar from './Pages/NavBar/navbar';


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <OurPartners />
    </div>
  )
 }

      


export default App;