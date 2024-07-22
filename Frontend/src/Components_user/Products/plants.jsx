import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios'; 
import PlantsCard from '../Cards/PlantsCard';
import Nav2 from '../Nav2';
import Nav3 from '../Nav3';



const plants=()=>{
    
    const [plants,setPlants]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/getplants')
        .then(plants=>setPlants(plants.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <Nav2></Nav2>
        <Nav3></Nav3>
            <div className='nmnm'>
            <div className='row nm'>
            {plants.map((plants,index)=>(
                        <PlantsCard key={index} plant={plants}/>
                    ))}
            </div>
        </div>
        </>
    );
}

export default plants;