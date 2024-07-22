import './Nav3.css'
import gift from '../Image/gift.png';
import fertiliger from '../Image/fertilizer.png'
import herb from '../Image/herb.png'
import seed from '../Image/seed.png'
import tool from '../Image/tool.png'
import plant from '../Image/plant.png'
import cs from '../Image/cs.png'
import { Link } from 'react-router-dom';



const Nav3=()=>{
    return(
        <>
            <section1>
                <div className="row nav3rr">
                    <Link to='/cosplants' className="col op"><div className="col op"><img src={plant}></img></div></Link>
                    <Link to='/cosseeds' className="col op"><div className="col op"><img src={seed}></img></div></Link>
                    <Link to='/cosherbs' className="col op"><div className="col op"><img src={herb}></img></div></Link>
                    <Link to='/cosgifts' className="col op"><div className="col op"><img src={gift}></img></div></Link>
                    <Link to='/cosfertilizers' className="col op"><div className="col op"><img src={fertiliger}></img></div></Link>
                    <Link to='/cosaccesories' className="col op"><div className="col op"><img src={tool}></img></div></Link>
                    <div className="col op"><img src={cs} height={70}></img></div>
                    <div className="col op"><img src={cs} height={70}></img></div>
                </div>
            </section1>
        </>
    )
}

export default Nav3;