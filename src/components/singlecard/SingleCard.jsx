import React from 'react';
import "./Singlecard.css"
import { Button, Card } from 'react-bootstrap';
import pic2 from "../../assets/pic2.jpg"
import { Link } from 'react-router-dom';
const SingleCard = ({ chef }) => {

    const { chefName, likes, totalrecipe, experience, photo, id } = chef
    return (
        <div>
            
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={photo} />
                    <Card.Body>
                        <Card.Title>{chefName}</Card.Title>
                        <Card.Text>
                            Likes: {likes}
                        </Card.Text>
                        <Card.Text>
                            Experience: {experience} Years
                        </Card.Text>
                        <Link to={`/chef/${id}`}><Button variant="primary">veiw Reciepe</Button></Link>
                    </Card.Body>
                </Card>
            
        </div>
    );
};

export default SingleCard;