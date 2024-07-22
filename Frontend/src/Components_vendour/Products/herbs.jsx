import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import HerbsCard from '../Cards/HerbsCard';



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
            
            <div className='main1'>
            <div className='row r1'>
            {herbs.map((herbs,index)=>(
                        <HerbsCard key={index} herbs={herbs}/>
                    ))}
            </div>
        </div>
            
        </>
    );
}

export default herbs;