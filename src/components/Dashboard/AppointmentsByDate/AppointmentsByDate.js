import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div>
           <h1>Appointments</h1>
           {
               appointments.length?<AppointmentShortList appointments={appointments}/>:<p className='text-center'>No Appointment on this date</p>
           } 
        </div>
    );
};

export default AppointmentsByDate;