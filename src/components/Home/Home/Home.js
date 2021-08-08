import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <DentalCare/>
            <Appointment/>
            <Testimonials/>
            <Blog/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;