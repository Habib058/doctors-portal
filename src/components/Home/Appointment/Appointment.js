import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../images/doctor.png'
import './Appointment.css'

const Appointment = () => {
    return (
        <section className="make-appointment mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-5 d-none d-md-block">
                    <img src={doctor} alt=""/>
                </div>
                <div className="col-md-7 text-white py-5">
                    <h5 className="text-primary text-uppercase ">Appointment</h5>
                    <h1 className="my-4">Make an Appointment <br/> Today</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                    <Link to='/appointment'><button className="btn btn-primary">Make An Appointment</button></Link>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Appointment;