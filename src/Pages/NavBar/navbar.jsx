import { default as ButtonComponent } from '../../Components'
import { navbarpicture } from '../../assets';
import './style.css'


function NavBar (props) {

    return (

        <>

        <header>

            <nav className='navbar'>

                <img className='img' src={ navbarpicture }></img>
                <h1 className='title'>CESC Coqueiral</h1>
                
                <ul className='buttons'>
                    <li><ButtonComponent title='Quem somos' classButton='button_navbar' onClick="location.href='#quemsomos'" id='item1'></ButtonComponent></li>
                    <li><ButtonComponent title='O que fazemos' classButton='button_navbar' onClick="location.href='#oquefazemos'"></ButtonComponent></li>
                    <li><ButtonComponent title='Nossos parceiros' classButton='button_navbar' onClick="location.href='#nossosparceiros'"></ButtonComponent></li>
                    <li><ButtonComponent title='Seja voluntário' classButton='button_navbar' onClick="location.href='#sejavoluntário'"></ButtonComponent></li>
                    <li><ButtonComponent title='Contato' classButton='button_navbar' onClick="location.href='#contato'"></ButtonComponent></li>

                </ul>

            </nav>
        </header>
        
        </>
    )
}

export default NavBar;
