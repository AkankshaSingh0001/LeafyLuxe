import './Nav1.css';
import facebook from '../Image/icons8-facebook-50.png';
import instagram from '../Image/icons8-instagram-48.png';
import twitter from '../Image/icons8-twitter-50.png';
import pintrest from '../Image/icons8-pinterest-50.png';
import phone from '../Image/icons8-phone-30.png';
import email from '../Image/icons8-mail-24.png';
import logo from '../Image/logo2.webp';

const nav1=()=>{
    return(
        <>
          <nav class="navbar1">
        <div class="left">
           
            <img src={facebook} height={30} width={30} className='social-icon'></img>
            <img src={instagram} height={30} width={30} className='social-icon'></img>
            <img src={twitter} height={30} width={30} className='social-icon'></img>
            <img src={pintrest} height={30} width={30} className='social-icon'></img>
        </div>
        <div class="center">
            
            <img src={logo} alt="Logo" height={80} width={80} ></img>
        </div>
        <div class="right">
           
        <img src={phone} height={30} width={30} className='social-icon'></img><span class="contact-info"> 123456789</span>
        <img src={email} height={30} width={30} className='social-icon'></img><span class="contact-info"> example@example.com</span>
        </div>
    </nav>
        </>
    )
}

export default nav1;