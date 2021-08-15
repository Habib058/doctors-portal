import React from 'react';

const AppointmentShortList = ({appointments}) => {
    return (
        <table className='table table-borderless'>
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">SL No</th>
                    <th className="text-secondary " scope="col">Name</th>
                    <th className="text-secondary " scope="col">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((app,index)=>
                    <tr>
                        <td>{index+1}</td>
                        <td>{app.name}</td>
                        <td>{app.phone}</td>
                    </tr>
                    )
                }
            </tbody>

        </table>
    );
};

export default AppointmentShortList;