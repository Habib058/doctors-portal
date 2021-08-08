import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mr-5" id="navbarNav">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item active">
                        <a class="nav-link  mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  mr-5" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  mr-5 " href="#">Dental services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  mr-5 text-light" href="#">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  mr-5 text-light" href="#">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-6 text-light" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;