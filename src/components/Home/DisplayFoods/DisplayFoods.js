import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const DisplayFoods = ({ food }) => {
    const {name, price , restaurant, imageURL, _id} = food;

    const history = useHistory();
    const handleClick = id =>{
        history.push(`/checkout/${id}`)
    }

    return (
        <Col xs={12} md={4} className="d-flex justify-content-center mt-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageURL} height="200px" />
                <Card.Body>
                    <Card.Title>Food Name: {name}</Card.Title>
                    <Card.Text>
                        Restaurant Name: {restaurant}
                    </Card.Text>
                    <Card.Text>
                        Price : <span style={{color:'blue'}}>৳{price}</span>
                    </Card.Text>
                    <Button variant="primary" onClick={()=>handleClick(_id)}>Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DisplayFoods;