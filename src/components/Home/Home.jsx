import React from 'react';
import "./Home.css"
import { Button, Card } from 'react-bootstrap';
import pic2 from "../../assets/pic2.jpg"
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../singlecard/SingleCard';



const Home = () => {

    const mydata = useLoaderData()

    return (
        <div>

            {/* banner Section */}
            <div className="banner_Container">
                <div className="bannertext bg-primary">
                    <h1>This Big Bazar Of Chef</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, consequuntur! Laudantium eligendi a, est aperiam voluptatibus delectus dolore rerum molestias obcaecati, animi officia commodi earum neque inventore. Eum, odio obcaecati?</p>
                </div>
            </div>
            {/* Chef Collection Section */}

            <div className='allcardcontainer'>
                {
                    mydata.map(chef => <SingleCard
                        key={chef.id}
                        chef={chef}
                    ></SingleCard>)
                }

            </div>

            {/*Healty food Section */}
            <div className='container'>
                
            </div>


        </div>
    );
};

export default Home;