import React from 'react';
import './style.css';


function FoterComponent() {
    return(
            <footer id="footer">
                <div id="vector">
                <div id="rectangle">

                    <div className="text" id="arrecad">
                        <p>Recebemos doações de cestas básicas de alimentos e produtos de limpeza. <br /> Pix ou transferência bancária
                        <br /> Pix Celular - 81 9 88385780</p> 
                    </div>

                    <div id="arrecad_image"></div>
                    
                    <div id="endereco">
                        <p> Endereço: Rua Caripós, 372 -Coqueiral <br />
                        CEP: 50791120</p>
                    </div>
                    <div  id="endereco_image"></div>

                    <div id="whatsapp">
                        <p>(81) 9724-4808</p>
                    </div>
                    <div id="whatsapp_image"></div>

                    <div  id="instagram">
                        <p>@cesc_coqueiral</p>
                    </div>
                    <div id="instagram_image"></div>

                    <div id="citi">
                        <p>
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
                </div>
                </div>  
            </footer>
    )
};

export default FoterComponent;