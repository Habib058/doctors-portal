import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceList from '../ServiceList/ServiceList';
import './Services.css'
const service = [
    {
        title: 'Fluoride Treatment',
        img: fluoride
    },
    {
        title: 'Cavity Filling',
        img: cavity
    },
    {
        title: 'Teeth whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className='mt-5 service'>
            <div className='text-center d-block'>
                <h3>Our Services</h3>
                <h1>Services We Provide</h1>
            </div>
            <div className='d-flex justify-content-center '>
            <div className='w-75 row mt-5 pt-5'>
                {
                    service.map(service => <ServiceList service={service}></ServiceList>)
                }

            </div>
            </div>
            
        </section>
    );
};

export default Services;