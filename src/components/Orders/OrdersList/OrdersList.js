import React from 'react';

const OrdersList = ({food}) => {
    const {foodName, price, quantity, date} = food;
    return (
        <li style={{borderBottom:'1px solid lightgray'}}>
            <strong>Food Name</strong>:{foodName}
            <br/>
            <strong>Price</strong>:{price}
            <br/>
            <strong>Quantity</strong>:{quantity}
            <br/>
            <strong>Orders Date</strong>:{date}
        </li>
    );
};

export default OrdersList;