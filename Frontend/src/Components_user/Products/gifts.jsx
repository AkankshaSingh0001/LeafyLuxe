import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import GiftsCard from '../Cards/GiftsCard';
import Nav2 from '../Nav2';
import Nav3 from '../Nav3';
 
const gifts=()=>{
    
    const [gifts,setGifts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/getgifts')
        .then(gifts=>setGifts(gifts.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <Nav2></Nav2>
        <Nav3></Nav3>
            <div className='nmnm'>
            <div className='row nm'>
            {gifts.map((gifts,index)=>(
                        <GiftsCard key={index} gift={gifts}/>
                    ))}
            </div>
        </div>
           
        </>
    );
}

export default gifts;