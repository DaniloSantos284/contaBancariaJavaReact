import './style.css'
import ocultar from '../assets/ocultar.png';

function Saldo(){
    return(

        <div className='container'>
            <h2 className='titulo'>Saldo</h2>
                <p className='saldo'>R$</p>
                <img src={ocultar} alt='Olho para ocultar ou mostrar saldo' className='icone-ocultar'></img>
        </div>
    )
    
};

export default Saldo;