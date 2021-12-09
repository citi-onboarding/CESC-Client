import React from 'react';
import OurPartners from './Pages';
import './style.css';
import {Welcome} from "./Pages"
import NavBar from './Pages/NavBar/navbar';


const App = () => {
  return (
   
    <div className="App">
      <NavBar/>
      <Welcome/>
      <OurPartners />
    </div>


  )
 }

    


export default App;