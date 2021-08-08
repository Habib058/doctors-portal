import React from 'react';
import wilson from '../../../images/Ellipse 3.png'
import IndividualBlog from '../IndividualBlog/IndividualBlog';
const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
]

const Blog = () => {
    return (
        <section className='my-5 py-5'>
            <div className='container'>
            <div className='text-center'>
                <h5>Our Blog</h5>
                <h1>From Our Blog News</h1>
            </div>
            <div className="card-deck mt-5">
                {
                    blogData.map(blog=><IndividualBlog blog={blog} key={blog.title}/>)
                }
            </div>
            </div>
            
        </section>
    );
};

export default Blog;