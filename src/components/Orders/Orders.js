import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import NavigationBar from '../Home/NavigationBar/NavigationBar';
import OrdersList from './OrdersList/OrdersList';

const Orders = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const {email} = loggedInUser;

    const [totalOrder, setTotalOrder] = useState([]);

    
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${email}`)
        .then(res => res.json())
        .then(data => {
            setTotalOrder(data)
        })
    },[email])

    return (
        <div>
            <NavigationBar></NavigationBar>
            <h2 className="text-center text-secondary">Welcome {email}</h2>
            <h1 className="text-center">Your total orders :{totalOrder.length}</h1>
            <hr/>
            <br/>
            <ol>
                {
                    totalOrder.map(food=><OrdersList food={food} key={food._id}></OrdersList>)
                }
            </ol>
        </div>
    );
};

export default Orders;