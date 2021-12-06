import React from 'react';
import './style.css';


function FoterComponent() {
    return(
        <>
        <div className="box">
            <footer className="footer">
                <div className= "vector"></div>
                <div className="rectangle"></div>

                <div className="text" id="arrecad">
                    <p className="paragrafo">Recebemos doações de cestas básicas de alimentos e produtos de limpeza.</p>
                    <p className="paragrafo">Pix ou transferência bancária</p> 
                    <p className="paragrafo">Pix Celular - 81 9 88385780</p> 
                </div>

                <div className="img" id="arrecad_image"></div>
                
                <div className="text" id="endereco">
                    <p className="paragrafo">  Endereço: Rua Caripós, 372 -Coqueiral</p> 
                    <p className="paragrafo" id="p_cep">CEP: 50791120</p>
                </div>
                <div className="img" id="endereco_image"></div>

                <div className="text" id="whatsapp">
                    <p className="paragrafo">(81) 9724-4808</p>
                </div>
                <div className="img" id="whatsapp_image"></div>

                <div className="text" id="instagram">
                    <p className="paragrafo">cesc_coqueiral</p>
                </div>
                <div className="img" id="instagram_image"></div>

                <div className="citi" id="citi">
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
            </footer>
        </div>
        </>
    )
};

export default FoterComponent;