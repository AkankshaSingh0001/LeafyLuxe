import './Cosprofile.css';
import Nav1 from './Nav1';
import React, { useState, useEffect } from 'react';
import Nav2 from './Nav2';

const Profile = () => {
    const storedData = JSON.parse(localStorage.getItem("logindata"));
    const [isEditing, setIsEditing] = useState(false);

    const handleTextboxClick = () => {
        setIsEditing(true);  
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    return(
        <>
            <Nav1 />
            <Nav2></Nav2>
            <br />
            <div className="cosprofile">
                <div className="ccustomer-details row">
                    <div className='col-5 cosproimg'>
                        <div><img src={`http://localhost:8080/images/${storedData.photo}`} alt="Customer Avatar" height={200} width={200} /></div>
                        <div>
                            <span className='coslable'>First Name</span><br />
                            <input type="text" value={storedData.firstName} disabled={!isEditing}  className='costext'/><br /><br />
                            <span className='coslable'>Last Name</span><br />
                            <input type="text" value={storedData.lastName} disabled={!isEditing} className='costext'/><br /><br />
                            <span className='coslable'>Email</span><br />
                            <input type="email" value={storedData.email} disabled={!isEditing}  className='costext'/><br /><br />
                        </div>
                    </div>
                    <div className='col-7 cosdetail'>
                        <h2 className='cosproname'>{storedData.firstName} {storedData.lastName}</h2><br />
                        <div>
                            <span className='coslable'>Phone Number</span><br />
                            <input type="number" value={storedData.phoneNumber} disabled={!isEditing} className='costext' /><br /><br />
                            <span className='coslable'>DOB</span><br />
                            <input type="date" value={storedData.DOB} disabled={!isEditing} className='costext'/><br /><br />
                            <span className='coslable'>Address</span><br />
                            <input type="text" value={storedData.address} disabled={!isEditing} className='costext'/><br /><br />
                            <span className='coslable'>City</span><br />
                            <input type="text" value={storedData.city} disabled={!isEditing} className='costext'/><br /><br />
                            <span className='coslable'>PIN Code</span><br />
                            <input type="number" value={storedData.pincode} disabled={!isEditing} className='costext' /><br /><br />
                        </div>
                    </div>
                    {isEditing ? (
                        <>
                            <button className='cosprobut' onClick={handleSave}>Save</button>
                        </>
                    ) : (
                        <>
                            <button className='cosprobut' onClick={handleTextboxClick}>Update</button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Profile;
