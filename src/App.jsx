import React from 'react';
import FoterComponent from './Pages/footer';
import './style.css'
import {OurPartners} from './Pages';
import './style.css';
import ButtonComponent from './Components/ButtonComponent/ButtonComponent';
import Carrossel from './Pages/Carrossel/index';
import {Welcome} from "./Pages"
import NavBar from './Pages/NavBar/navbar';
import {Whoweare} from '../src/Pages/index';


const App = () => {
  return (
   
    <div className="App">
      
      <NavBar/>
      <Welcome/>
      <Whoweare/>
      <Carrossel/>
      <OurPartners />
      <FoterComponent/>
    </div>


  )
 }

    


export default App;
