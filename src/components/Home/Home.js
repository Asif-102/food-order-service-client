import './Home.css';
import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, Row, Spinner } from 'react-bootstrap';
import DisplayFoods from './DisplayFoods/DisplayFoods';
import NavigationBar from './NavigationBar/NavigationBar';

const Home = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div className="home">
            <NavigationBar></NavigationBar>
            <Form inline className="d-flex justify-content-center mt-4">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
            {
                foods.length === 0 && <>
                    <div className="text-center">
                        <Spinner animation="grow" variant="primary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="success" />
                        <Spinner animation="grow" variant="danger" />
                        <Spinner animation="grow" variant="warning" />
                        <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="light" />
                        <Spinner animation="grow" variant="dark" />
                    </div>
                </>
            }
            <Row>
                {
                    foods.map(food => <DisplayFoods food={food} key={food._id}></DisplayFoods>)
                }
            </Row>
        </div>
    );
};

export default Home;