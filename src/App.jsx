import React from 'react';
import './style.css';
import ButtonComponent from './Components/ButtonComponent/ButtonComponent';

const App = () => {
  return (
    <>
      <div className="">
          <ButtonComponent title="Quem somos" classButton="button_navbar" />
          <ButtonComponent title="O que fazemos" classButton="button_navbar"/>
          <ButtonComponent title="Nossos parceiros" classButton="button_navbar"/>
          <ButtonComponent title="Seja voluntário" classButton="button_navbar"/>
          <ButtonComponent title="Contato" classButton="button_navbar"/>
      </div>

      <div>
        <ButtonComponent title="Enviar" classButton="button_submit"/>
      </div>
    </>
)
}

export default App;
