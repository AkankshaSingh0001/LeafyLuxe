import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import SeedsCard from '../Cards/SeedsCard';


const seeds=()=>{
    
    const [seeds,setSeeds]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/getseeds')
        .then(seeds=>setSeeds(seeds.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
            
            <div className='main1'>
            <div className='row r1'>
            {seeds.map((seeds,index)=>(
                        <SeedsCard key={index} seed={seeds}/>
                    ))}
            </div>
        </div>
        </>
    );
}

export default seeds;