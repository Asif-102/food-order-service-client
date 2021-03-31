import './Home.css';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DisplayFoods from './DisplayFoods/DisplayFoods';
import NavigationBar from './NavigationBar/NavigationBar';

const Home = () => {
    const [foods , setFoods] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    return (
        <div className="home">
            <NavigationBar></NavigationBar>
            <Row>
                {
                    foods.map(food=><DisplayFoods food={food} key={food._id}></DisplayFoods>)
                }
            </Row>
        </div>
    );
};

export default Home;