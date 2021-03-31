import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const DisplayFoods = ({ food }) => {
    const {name, price , restaurant, imageURL} = food;
    return (
        <Col xs={12} md={4} className="d-flex justify-content-center mt-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageURL} height="200px" />
                <Card.Body>
                    <Card.Title>Food Name: {name}</Card.Title>
                    <Card.Text>
                        <h6>Restaurant Name: {restaurant}</h6>
                        <p>Price : <span style={{color:'blue'}}>৳{price}</span></p>
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DisplayFoods;