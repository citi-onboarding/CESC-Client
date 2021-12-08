import React from 'react';
import './style.css';


function FooterComponent() {
    return(
    <>
            <footer id="footer">
                   <div id="vector"> </div>
                    <div id="rectangle"> </div> 
               
               
                    <div id="arrecad">
                        <p className="text">Recebemos doações de cestas básicas de alimentos e produtos de limpeza. <br /> Pix ou transferência bancária
                        <br /> Pix Celular - 81 9 88385780</p> 
                        <div id="arrecad_image"></div>
                    </div>

                    
                    
                    <div id="endereco">
                        <p className="text"> Endereço: Rua Caripós, 372 - Coqueiral <br />
                        CEP: 50791120</p>
                        <div  id="endereco_image"></div>
                    </div>
                    

                    <div id="whatsapp">
                        <p className="text">(81) 9724-4808</p>
                        <div id="whatsapp_image"></div>
                    </div>
                    

                    <div  id="instagram">
                        <p className="text">@cesc_coqueiral</p>
                        <div id="instagram_image"></div>
                    </div>

                    <div id="citi">
                        <p className="text">
                            Feito com
                            {' '}
                            <strong>&hearts;</strong>
                            {' '}
                            e 
                            {' '}
                            <strong>&lt; &#x0002F; &gt;</strong>
                            {' '}
                            pelo CITi
                        </p>
                    </div>
            </footer>
    </>
    )
};

export default FooterComponent;