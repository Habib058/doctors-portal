import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css'

const InfoCard = ({ info }) => {
    return (
        <div className='col-md-4 info-card mt-3'>
            <div className={`d-flex justify-content-center align-items-center px-5 py-5 info-${info.color} text-white`}>
                <div className='mx-3'>
                    <FontAwesomeIcon className='info-icon ms-3' icon={info.icon} />
                </div>
                <div>
                    <h5>{info.title}</h5>
                    <small>{info.description}</small>
                </div>
            </div>

        </div>
    );
};

export default InfoCard;