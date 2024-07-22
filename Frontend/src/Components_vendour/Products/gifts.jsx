import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import GiftsCard from '../Cards/GiftsCard';


const gifts=()=>{
    
    const [gifts,setGifts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/getgifts')
        .then(gifts=>setGifts(gifts.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
           
            <div className='main1'>
            <div className='row r1'>
            {gifts.map((gifts,index)=>(
                        <GiftsCard key={index} gift={gifts}/>
                    ))}
            </div>
        </div>
           
        </>
    );
}

export default gifts;