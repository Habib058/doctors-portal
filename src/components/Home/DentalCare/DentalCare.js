import React from 'react';
import Dental from '../../../images/Mask Group 3.png'

const DentalCare = () => {
    return (
        <section className='mt-5 pb-md-5 my-5 pb-0 mb-5'>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row d-flex align-items-center'>
                    <div className='col-md-5 mb-4 m-md-0'>
                        <img style={{height:'500px'}} className='img-fluid' src={Dental} alt="" />
                    </div>
                    <div className='col-md-7 align-self-center'>
                        <h1>Exceptional Dental Care,On Your Terms</h1>
                        <p className='text-secondary my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam debitis pariatur deserunt distinctio ipsa enim nihil cum dolore sit voluptate vero unde qui ipsum vitae sequi at eaque eius eum dicta dolorem facere suscipit? Provident facere similique hic aliquid esse repellat, commodi nihil iste facilis nesciunt quisquam temporibus omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam debitis pariatur deserunt distinctio ipsa enim nihil cum dolore sit voluptate vero unde qui ipsum vitae sequi at eaque eius eum dicta dolorem facere suscipit? Provident facere similique hic aliquid esse repellat, commodi nihil iste facilis nesciunt quisquam temporibus omnis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aperiam debitis pariatur deserunt distinctio ipsa enim nihil cum dolore sit voluptate vero unde qui ipsum vitae sequi at eaque eius eum dicta dolorem facere suscipit? Provident facere similique hic aliquid esse repellat, commodi nihil iste facilis nesciunt quisquam temporibus omnis!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;