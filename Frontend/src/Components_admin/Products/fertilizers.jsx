import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import FertilizerCard from '../Cards/FertilizerCard';
import Nav from '../navproduct';

const fertilizers=()=>{

    const [fertilizers,setFertilizers]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/getfertilizers')
        .then(fertilizers=>setFertilizers(fertilizers.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <Nav></Nav>
        <div className='main11'>
            <div className='row'>
                {fertilizers.map((fertilizers,index)=>(
                <FertilizerCard key={index} fertilizer={fertilizers}/>))}
            </div>
        </div>
        </>
    );
}

export default fertilizers;