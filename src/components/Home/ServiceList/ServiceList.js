import React from 'react';

const ServiceList = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <div>
                <img src={service.img} alt="" />
                <h3>{service.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, optio?</p>
            </div>
        </div>
    );
};

export default ServiceList;