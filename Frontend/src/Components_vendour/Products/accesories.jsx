import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import AccesoriesCard from '../Cards/AccesoriesCard';



const Accesories=()=>{
    
    const [accesories,setAccesories]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/getaccesories')
        .then(accesories=>setAccesories(accesories.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
            
            <div className='main1'>
            <div className='row r1'>
            {accesories.map((accesories,index)=>(
                        <AccesoriesCard key={index} accessory={accesories}/>
                    ))}
            </div>
        </div>
        </>
    );
}

export default Accesories;