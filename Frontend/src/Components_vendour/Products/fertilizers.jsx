import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import FertilizerCard from '../Cards/FertilizerCard';


const fertilizers=()=>{

    const [fertilizers,setFertilizers]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/getfertilizers')
        .then(fertilizers=>setFertilizers(fertilizers.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <div className='main1'>
            <div className='row r1'>
                {fertilizers.map((fertilizers,index)=>(
                <FertilizerCard key={index} fertilizer={fertilizers}/>))}
            </div>
        </div>
        </>
    );
}

export default fertilizers;