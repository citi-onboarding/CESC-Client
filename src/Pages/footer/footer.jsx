import React from 'react';
import './style.css';


function FooterComponent() {
    return(
        <>
            <footer id="footer">
                       <div className='vector'>
                           <div className='endereco'>
                                <div className='img_endereco'>
                                    <img src='../../assets/place2.svg' alt="" /> 
                                </div>
                                <div className='text_endereco' id='text'>
                                        <p className="footer-text">Endereço: Rua Caripós, 372 -Coqueiral <br />
                                        CEP: 50791120</p>
                                </div> 
                            </div>
                        
                            <div className='arrecad'>
                    
                                <div className='img_arrecad'>
                                    <img src="../../assets/heart1.svg" alt="" />
                                </div>
                                <div className='text_arrecad' id='text'>
                                    <p className="footer-text" >Recebemos doações de cestas básicas de alimentos e produtos de limpeza. <br />
                                        Pix ou transferência bancária <br />
                                        Pix Celular - 81 9 88385780</p>
                                </div>   
                            </div>    
                        </div>

                        <div className='rectangle'>
                            <div className='instagram_whatsapp'>
                                <div className='instagram'>
                                    <div className='img_instagram'>
                                        <img src='../../assets/instagram1.svg' alt="" /> 
                                    </div>
                                    <div className='text_instagram' id='text'>
                                        <p className="footer-text">@cesc_coqueiral</p>
                                    </div>
                                </div>

                                <div className='whatsapp'>
                                    <div className='img_whatsapp'>
                                        <img src='../../assets/whatsapp1.svg' alt="" /> 
                                    </div>
                                    <div className='text_whatsapp' id='text'>
                                        <p className="footer-text">(81) 9724-4808</p>
                                    </div>
                                </div>
                            </div>

                            <div className='citi'>
                                <p id='text' className="footer-text">
                                    Made with
                                    {' '}
                                    <strong>&lt; &#x0002F; &gt;</strong>
                                    {' '}
                                    and
                                    {' '}
                                    <strong>&hearts;</strong>
                                    {' '}
                                    by CITi
                                </p>
                            </div>
                        </div>   
            </footer>
   </>
    )
};

export default FooterComponent;