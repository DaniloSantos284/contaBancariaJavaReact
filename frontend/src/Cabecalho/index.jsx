import './style.css'
import logotipo from '../assets/logotipo.png';
import icone_logoff from '../assets/icone_logoff.png';
import MenuHamburguer from '../MenuHamburguer';


function Cabecalho(){
    return(

        <div className='cabecalho'>
        <img src={logotipo} alt='Logotipo da empresa JBanking' className='imagem_logo' />

        <MenuHamburguer />
        <button className='botao'> CRIAR CONTA</button>
    
        <div className='container_sair'>
            <img src={icone_logoff} alt='Ícone de saída do app' className='imagem_sair' />
            <a href='home' className='sair'>SAIR</a>
       </div>
        </div>

    )

}
    

export default Cabecalho;