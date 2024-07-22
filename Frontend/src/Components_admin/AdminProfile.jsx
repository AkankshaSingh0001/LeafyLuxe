import React from 'react';
import Nav from './navproduct';
import './AdminProfile.css';

const storedData = JSON.parse(localStorage.getItem("logindata"));


const profile=()=>{
    return(
        <>
            
            <section>
            <Nav></Nav>
                <div className='row pp'>
                    <div className='col-3'></div>
                    <div className='col-6 '>
                        <div className='row r1'>
                            <div className='col-12 ppp'><img src={`http://localhost:8080/images/${storedData.photo}`} alt="Article Image" className='img111'/></div><br></br>
                            <div className='col-12 ppp'><b>Name: &nbsp;</b>{storedData.username}</div>
                            <div className='col-12 ppp'><b>Email: &nbsp;</b>{storedData.email}</div>
                            <div className='col-12 ppp'><button className='bb'>Request Change</button></div>
                        </div>
                    </div>
                    <div className='col-3'></div>
                </div>
            </section>
        </>
    )
}

export default profile;