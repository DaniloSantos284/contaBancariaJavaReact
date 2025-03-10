import './style.css';
import menuhamburguer from '../assets/menuhamburguer.png';
import {useRef, useState} from 'react';


function MenuHamburguer(){
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive)



    return(
    <div className="container">
        <div className='menu-container'>
            <button onClick={onClick} className='menubotao'> 
            <span></span>
            <img src={menuhamburguer} className='menu-imagem' alt='Menu'></img>
            </button>

            <nav ref={dropDownRef} className={`menu ${isActive ? "active" : ""}`}>
                <ul className='lista-menu'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Criar conta</a></li>
                    <li><a href='#'>Sair</a></li>

                </ul>
            </nav>
        </div>
    </div>
)
}

export default MenuHamburguer;