import React from 'react';
import { useEffect,useState} from 'react';
import axios from 'axios';
import Nav from './navproduct';
import './handle_admins.css';
//import photo from '../../../Backend/models';

const admin=()=>{
    const [admins,setAdmins]=useState([]);
    useEffect(()=>{
        getProduct();
    },[])
    
    const getProduct=()=>{
        axios.get('http://localhost:8080/getadmins')
        .then(admins=>setAdmins(admins.data))
        .catch(err=>console.log(err))
    }

    const handleDelete = async (admins) => {
        console.log(admins._id)
        try {
          await axios.delete(`http://localhost:8080/admins/${admins._id}`);
          getProduct();
        } catch (error) {
          console.error('Error deleting admin:', error);
          
        }
      };

    return(
        <>
            <Nav></Nav><br></br><br></br>
            <div className=''>
            <div className='row'>

            <table className='admintable'>
                <tr>
                    <th>Sr No.</th>
                    <th>Username</th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Password</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr><br></br>
                        

                {admins.map((admins,index)=>(
                        
                    <tr>
                        <td>{index+1}</td>
                        <td>{admins.username}</td>
                        <td><img src={`http://localhost:8080/images/${admins.photo}`} alt="Article Image" height={130} width={130}/></td>
                        <td>{admins.email}</td>
                        <td>{admins.role}</td>
                        <td>{admins.password}</td>
                        <td><button className='EditButton'>Edit</button></td>
                        <td><button onClick={()=>handleDelete(admins)} className='DeleteButton'>Delete</button></td>
                    </tr>

                ))}
            </table>
            </div>
        </div>
        </>
    );
}


export default admin;