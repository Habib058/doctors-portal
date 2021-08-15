import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AllPatientList from '../AllPatientList/AllPatientList';

const AllPatients = () => {
    const [patients,setPatients] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/patients')
        .then(res=>res.json())
        .then(data=>setPatients(data))
    },[])
    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AllPatientList appointments={patients} />
            </div>
        </div>
    );
};

export default AllPatients;