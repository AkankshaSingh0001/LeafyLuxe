import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import AccesoriesCard from '../Cards/AccesoriesCard';
import Nav2 from '../Nav2';
import Nav3 from '../Nav3';


const accesories=()=>{
    
    const [accesories,setAccesories]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/getaccesories')
        .then(accesories=>setAccesories(accesories.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <Nav2></Nav2>
        <Nav3></Nav3>
            <div className='nmnm'>
            <div className='row nm'>
            {accesories.map((accesories,index)=>(
                        <AccesoriesCard key={index} accesorie={accesories}/>
                    ))}
            </div>
        </div>
        </>
    );
}

export default accesories;