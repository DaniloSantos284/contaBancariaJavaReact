import './style.css';
import banner from '../assets/banner.png';



function Banner(){
    return(
        
        <div className="banner-container">
            <img src={banner} className='banner-img' alt='Imagem do Jbanking' />
            
        </div>
    )
    
};

export default Banner;