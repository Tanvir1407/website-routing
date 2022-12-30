import React from 'react';
import { useLocation} from 'react-router-dom';

const Blog = () => {
    const location = useLocation();
    
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{location.state.title} Documentation</h1>
            <p>{location.state.body.slice(0, 300)}</p> <br></br>
            <p>{location.state.body.slice(301, 600)}</p> <br></br>
            <p>{location.state.body.slice(601, 2000)}</p> <br></br>
            
        </div>
    );
};

export default Blog;