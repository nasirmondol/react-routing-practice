import React from 'react';
import { useState } from 'react';
import { blogsData } from '../../data';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData);

    const tranketString = (str, num) =>{
        if(str.length > num){
            return str.slice(0, num) + "..."
        }
        else{
            return str
        }
    }

    return (
        <div>
            <section>
                {blogs.map((blog) => {
                    const {id, title, description} = blog;
                    return <article key={id}>
                        <h3>{title}</h3>
                        <p>{tranketString(description, 100)}</p>
                        <Link to={title}>Learn more</Link>
                    </article>
                })}
            </section>
        </div>
    );
};

export default Blogs;