import React from 'react';
import './style.css';
import ButtonComponent from './Components/ButtonComponent/ButtonComponent';

const App = () => {
  return (
    <>
      <ButtonComponent className = "button_submit" title="Enviar"/>     
      <div className="B_navbar">
        <ButtonComponent id ="id_1" className = "button_navbar" title="Quem somos"/>
          
        <ButtonComponent id ="id_2" className = "button_navbar" title="O que fazemos"/>
          
        <ButtonComponent id ="id_3" className = "button_navbar" title="Nossos parceiros"/>
      
        <ButtonComponent id ="id_4" className = "button_navbar" title="Seja voluntário"/>

        <ButtonComponent id ="id_5" className = "button_navbar" title="Contato"/>
      </div>
    </>
)
}


export default App;
