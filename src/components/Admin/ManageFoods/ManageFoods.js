import './ManageFoods.css';
import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import EditDelete from './EditDelete/EditDelete';

const ManageFoods = () => {
    const [foods , setFoods] = useState([]);

    useEffect(()=>{
        fetch('https://foodeli-store.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])
    return (
        <div className="row">
            <Col xs={8} md={8}>
                <h2>Edit or Delete Foods</h2>
                <table>
                    <tr>
                        <th>Food Name</th>
                        <th>Restaurant Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                {
                    foods.map(food=><EditDelete food={food} key={food._id}></EditDelete>)
                }
                </table>
            </Col>
        </div>
    );
};

export default ManageFoods;