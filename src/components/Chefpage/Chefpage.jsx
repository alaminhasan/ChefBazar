import React from 'react';
import "./Chefpage.css"
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
const Chefpage = () => {
    const { chefName, likes, totalrecipe, experience, photo, id, description } = useLoaderData()

    return (
        <div>
            <div className="banner">
                <img src={photo} className='img-fluid' alt="" />
                <div className='p-2'>
                    <h1>Name: {chefName}</h1> 
                    <p>{description}</p>
                    <h2>Number of Recipe: {totalrecipe}</h2>
                    <h2>Experience: {experience}</h2>
                    <h2>Likes: {likes}</h2>
                </div>
            </div>
        </div>
    );
};

export default Chefpage;