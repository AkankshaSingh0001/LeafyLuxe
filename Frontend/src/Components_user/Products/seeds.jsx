import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import SeedsCard from '../Cards/SeedsCard';
import Nav2 from '../Nav2';
import Nav3 from '../Nav3';

const seeds=()=>{
    
    const [seeds,setSeeds]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/getseeds')
        .then(seeds=>setSeeds(seeds.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
            <Nav2></Nav2>
            <Nav3></Nav3>
            <div className='nmnm'>
            <div className='row nm'>
            {seeds.map((seeds,index)=>(
                        <SeedsCard key={index} seed={seeds}/>
                    ))}
            </div>
        </div>
        </>
    );
}

export default seeds;