import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios'; 
import PlantsCard from '../Cards/PlantsCard';
import Nav from '../Vnav'




const plants=()=>{
    
    const [plants,setPlants]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/getplants')
        .then(plants=>setPlants(plants.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
            <Nav></Nav>
            <div className=''>
            <div className='row'>
            {plants.map((plants,index)=>(
                        <PlantsCard key={index} plant={plants}/>
                    ))}
            </div>
        </div>
        </>
    );
}

export default plants;