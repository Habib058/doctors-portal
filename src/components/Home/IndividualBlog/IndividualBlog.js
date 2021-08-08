import React from 'react';

const IndividualBlog = ({blog}) => {
    return (
        <div className='card shadow-sm border'>
            <div className='d-flex justify-content-center mb-2'>
                <div className='mr-5'>
                   <img src={blog.authorImg} alt="" width='60' /> 
                </div>
                <div>
                    <p><b>{blog.author}</b></p>
                    <small>{blog.date}</small>
                </div>
            </div>
            <div className='text-center'>
                <h5>{blog.title}</h5>
            </div>
            <div className='text-center text-secondary'>
                <p>{blog.description}</p>
            </div>

           
        </div>
    );
};

export default IndividualBlog;