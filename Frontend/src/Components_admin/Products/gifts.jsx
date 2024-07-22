import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import GiftsCard from '../Cards/GiftsCard';
import Nav from '../navproduct';

const gifts=()=>{
    
    const [gifts,setGifts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/getgifts')
        .then(gifts=>setGifts(gifts.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
            <Nav> </Nav>
            <div className='main11'>
            <div className='row'>
            {gifts.map((gifts,index)=>(
                        <GiftsCard key={index} gift={gifts}/>
                    ))}
            </div>
        </div>
           
        </>
    );
}

export default gifts;