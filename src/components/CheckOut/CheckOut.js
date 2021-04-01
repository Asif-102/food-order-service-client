import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import NavigationBar from '../Home/NavigationBar/NavigationBar';

const CheckOut = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {email} = loggedInUser;

    let { id } = useParams();
    const [checkOut, setCheckOut] = useState({});
    const { name, price } = checkOut;

    useEffect(() => {
        fetch(`http://localhost:5000/buy?_id=${id}`)
            .then(res => res.json())
            .then(data => setCheckOut(data[0]))
    }, [id])

    const submitOrder = ()=>{
        const foodData = {
            email:email,
            foodName:name,
            price:price,
            quantity:'1',
            date: new Date()
        }
        const url = `http://localhost:5000/checkOut`;

        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(foodData)
        })
        .then(res => console.log('server side response ', res))
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container>
                <h2>Checkout</h2>
                <Row style={{color:'gray'}}>
                    <Col xs={4} md={4}>
                        <h4>Food Name</h4>
                    </Col>
                    <Col xs={4} md={4}>
                        <h4>Quantity</h4>
                    </Col>
                    <Col xs={4} md={4}>
                        <h4>Price</h4>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={4} md={4}>
                        <p>{name}</p>
                    </Col>
                    <Col xs={4} md={4}>
                        <p>1</p>
                    </Col>
                    <Col xs={4} md={4}>
                        <p>৳{price}</p>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={4} md={4}>
                        <h5>Total</h5>
                    </Col>
                    <Col xs={4} md={4}>
                        
                    </Col>
                    <Col xs={4} md={4}>
                        <p>৳{price}</p>
                    </Col>
                </Row>
                <Button onClick={()=>submitOrder()}>Checkout</Button>
            </Container>
        </div>
    );
};

export default CheckOut;