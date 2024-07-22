import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import FertilizerCard from '../Cards/FertilizerCard';
import Nav2 from '../Nav2';
import Nav3 from '../Nav3';
import './style.css';

const fertilizers=()=>{

    const [fertilizers,setFertilizers]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/getfertilizers')
        .then(fertilizers=>setFertilizers(fertilizers.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <Nav2></Nav2>
        <Nav3></Nav3>
        <div className='nmnm'>
            <div className='row nm'>
                {fertilizers.map((fertilizers,index)=>(
                <FertilizerCard key={index} fertilizer={fertilizers}/>))}
            </div>
        </div>
        </>
    );
}

export default fertilizers;