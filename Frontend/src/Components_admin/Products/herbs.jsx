import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import HerbsCard from '../Cards/HerbsCard';
import Nav from '../navproduct';
import './style.css'
 

const herbs=()=>{
    
    const [herbs,setHerbs]=useState([])
    useEffect(()=>{
        getProduct();
    },[])

    const getProduct=()=>{
        axios.get('http://localhost:8080/getherbs')
        .then(herbs=>setHerbs(herbs.data))
        .catch(err=>console.log(err))
    }

    return(
        <>
            <Nav></Nav>
            <div className='main11'>
            <div className='row'>
            {herbs.map((herbs,index)=>(
                        <HerbsCard key={index} herbs={herbs}/>
                    ))}
            </div>
             </div>
        </>
    );
}

export default herbs;