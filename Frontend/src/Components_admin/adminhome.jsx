import React, { useState, useEffect } from 'react';
import './Nav.css';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import './adminhome.css';
import { Link } from 'react-router-dom';

const Nav=()=>{

    const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  }

  const [orderCount, setOrderCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [orderRevenue, setOrderRevenue] = useState(0);
  const [todayRevenue, setTodayRevenue] = useState(0); 
  const [totalProfit, setTotalProfit] = useState(0); 



  useEffect(() => {
    fetchOrderCount();
    fetchOrderRevenue(); 
    fetchTodayRevenue();
    fetchTotalProfit();
  }, []);

   const fetchTotalProfit = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/orders/total-profit');
      if (!response.ok) {
        throw new Error('Failed to fetch total profit');
      }
      const data = await response.json();
      setTotalProfit(data.profit );
    } catch (error) {
      console.error('Error fetching total profit:', error);
    }
  };

  const fetchOrderRevenue = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/orderrevenue/total');
      if (!response.ok) {
        throw new Error('Failed to fetch order revenue');
      }
      const data = await response.json();
      setOrderRevenue(data.totalRevenue);
    } catch (error) {
      console.error('Error fetching order revenue:', error);
    }
  };


  const fetchTodayRevenue = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/orders/today-revenue');
      if (!response.ok) {
        throw new Error('Failed to fetch today\'s revenue');
      }
      const data = await response.json();
      setTodayRevenue(data.todayRevenue);
    } catch (error) {
      console.error('Error fetching today\'s revenue:', error);
    }
  };


  const fetchOrderCount = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/orders/count');
      if (!response.ok) {
        throw new Error('Failed to fetch order count');
      }
      const data = await response.json();
      setOrderCount(data.count);

      const appointmentResponse = await fetch('http://localhost:8080/api/appointments/count');
      if (!appointmentResponse.ok) {
        throw new Error('Failed to fetch appointment count');
      }
      const appointmentData = await appointmentResponse.json();
      setAppointmentCount(appointmentData.count);
      
     


    } catch (error) {
      console.error('Error fetching order count:', error);
    }
  };


    return(
        <>
            <nav className='my-navvv'>
                <div className='row'>
                    <Nav1></Nav1>
                    <div className='nav2'>
                        <Nav2></Nav2>
                    </div>
                </div>
            </nav>
            <div className='order-section'>
          <div className='row adminmainr1'>
          <div className='order-box col-6'><Link to='/AdminCusOrder'>
            <h1 className='torder'>TOTAL ORDERS</h1>
            <p>{orderCount+1}</p></Link>
          </div>
          <div className='order-box col-6'><Link to='/allapp'>
            <h1 className='torder'>APPOINTMENTS</h1>
            <p>{appointmentCount+1}</p></Link>
          </div>
          <div className='order-box col-6'><Link to='/allapp'>
            <h1 className='torder'>REVIEWS</h1>
            <p>{appointmentCount+1}</p></Link>
          </div>
          </div>
          {/* <div className='row adminmainr1'> */}
          {/* <div className='order-box col-6'><Link to='/admin/handle_delivery'>
            <h1 className='torder'>DELIVERY STAFFS</h1>
            <p>{deliveryStaffCount+1}</p></Link>
          </div> */}
          {/* <div className='order-box col-6'><Link to='/admin/handle_servicestaff'>
            <h1 className='torder'>SERVICE STAFFS</h1>
            <p>{serviceStaffCount+1}</p></Link>
          </div> */}
          <div className='row adminmainr1'>
          <div className='order-box col-6'>
            <h1 className='torder'>TOTAL REVENUE</h1>
            <p>₹{orderRevenue}</p>
          </div>
          <div className='order-box col-6'>
            <h1 className='torder'>TOTAL PROFIT</h1>
            <p>₹{totalProfit}</p>
          </div>
          <div className='order-box col-6'>
            <h1 className='torder'>TODAY REVENUE</h1>
            <p>₹{todayRevenue}</p>
          </div>
          {/* </div> */}
          </div>
          
        </div>

        </>
    )
}

export default Nav;
