import React, { useContext } from 'react';
import "./Blog.css"
import { AuthContext } from '../../Providers/AuthProvider';
const Blog = () => {
    const mydata = useContext(AuthContext)
    console.log(mydata)
    return (
        <div>
            this is blog
        </div>
    );
};

export default Blog;