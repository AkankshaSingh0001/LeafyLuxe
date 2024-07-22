import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import HerbsCard from '../Cards/HerbsCard';
import Nav2 from '../Nav2';
import Nav3 from '../Nav3';


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
        <Nav2></Nav2>
        <Nav3></Nav3>
            <div className='nmnm'>
            <div className='row nm'>
            {herbs.map((herbs,index)=>(
                        <HerbsCard key={index} herbs={herbs}/>
                    ))}
            </div>
        </div>
            
        </>
    );
}

export default herbs;