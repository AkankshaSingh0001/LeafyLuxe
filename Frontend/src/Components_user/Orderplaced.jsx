import './Orderplaced.css'
import { Link } from 'react-router-dom';
import placedorder from '../Image/orderplaced.gif'

const orderplaced=()=>{
    return(
        <>
            <div className="orderplacedmain">
                <div className='oorderplaced'>
                <span>Order Placed</span><br></br>
                <img src={placedorder}></img>
                <Link to='/CusOrderC'>Show All Orders</Link>
                </div>
            </div>
        </>
    )
}

export default orderplaced;