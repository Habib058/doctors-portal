import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mr-5" id="navbarNav">
                <ul class="navbar-nav ml-auto color ">
                    <li class="nav-item active">
                        <a class="nav-link nav-color  mr-5 text-info" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-color mr-5 text-info" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <Link to='dashboard' className="nav-link nav-color mr-5 text-info ">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-color mr-5 text-info" href="#">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-color mr-5 text-info" href="#">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-color mr-6 text-info" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;