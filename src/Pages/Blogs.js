import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from './data';

const Blogs = () => {
    const [data, setData] = useState(blogsData);

    console.log(data);
    return (
        <div>
            <h1>Blogs Page</h1>
            <section>
                {
                    data.map(blog => {
                        const {id , title, body} = blog
                        return <article key= {id}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <Link to={title}>Learn More</Link>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default Blogs;