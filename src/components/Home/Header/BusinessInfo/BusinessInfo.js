import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
const dataInfo =[
    {
        title:'Opening Hours',
        description:'We are Open 7 days',
        icon:faClock,
        color:'primary'
    },
    {
        title:'Visit Our Location',
        description:'Khulna,9201',
        icon:faMapMarker,
        color:'dark'
    },
    {
        title:'Contact Us Now',
        description:'0174516656321',
        icon:faPhone,
        color:'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className=' w-75 row'>
            {
                dataInfo.map(info=><InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;