import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './login.css'
import Nav1 from './Nav1';
import image from '../Image/login.jpg'
import logoimage from '../Image/logo1.webp'

const login=()=>{

    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    
    const handleLogin=async()=>{
        console.log(email,password)
        let result=await fetch('http://localhost:8080/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.log(result);
        
        if(result.username){
            localStorage.setItem("logindata",JSON.stringify(result));
            window.location.href='/admin';
        }
        else if(result.vname){
            localStorage.setItem("logindata",JSON.stringify(result));
            window.location.href='/vendour';
        }
        else if(result.firstName)
        {
            localStorage.setItem("logindata",JSON.stringify(result));
            window.location.href='/';
        }

        else{
            alert("please enter correct detail");
        }
    }


    return(
        <>
        <Nav1></Nav1>
            <div className='mainlogin'>
        <br></br>
        <h1 className='headinglogin'>Welcome to LeafyLuxe</h1>
        <div className='row loginrow'>
        

                    <div className='col-3'></div>
                    <div className='col-6 formcol'>
                        <div className='row'>
                            <div className='col-6'><img src={image} height={400} className='loginimage'></img></div>
                            <div className='col-6'>
                            <form>
                            <h2 className='headinglogin'>Login</h2>
                            <br></br>
                        <div className="form-group">
                        <label htmlFor="email">Email address</label><br></br>
                        <input
                            type="email"
                            onChange={(e)=>setEmail(e.target.value)}
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            required
                        />
                    </div><br></br>

                    

                    <div className="form-group">
                        <label htmlFor="password">Password</label><br></br>
                        <input
                            type="password"
                            className="form-control"
                            onChange={(e)=>setPassword(e.target.value)}
                            id="password"
                            placeholder="Enter password"
                            required
                        />
                    </div><br></br>

                    <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                        Log In
                    </button>
                    </form>
                            </div>
                        </div>
                    </div>
                <div className='col-3'></div>
                </div>
                </div>
        </>
    )
}

export default login;