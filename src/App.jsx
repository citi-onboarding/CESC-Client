import React from 'react';
import FoterComponent from './Pages/footer';
import './style.css'
import {OurPartners} from './Pages';
import './style.css';
import {Welcome} from "./Pages"
import NavBar from './Pages/NavBar/navbar';
import {Whoweare} from '../src/Pages/index';


const App = () => {
  return (
   
    <div className="App">
      <NavBar/>
      <Welcome/>
      <Whoweare/>
      <OurPartners />
      <FoterComponent/>
    </div>


  )
 }

    


export default App;
