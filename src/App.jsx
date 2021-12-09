import React from 'react';
import {OurPartners} from './Pages';
import './style.css';
import ButtonComponent from './Components/ButtonComponent/ButtonComponent';
import Carrossel from './Pages/Carrossel/index';
import {Welcome} from "./Pages"
import NavBar from './Pages/NavBar/navbar';


const App = () => {
  return (
   
    <div className="App">
      
      <NavBar/>
      <Welcome/>
      <Carrossel></Carrossel>
      <OurPartners />
    </div>


  )
 }

    


export default App;