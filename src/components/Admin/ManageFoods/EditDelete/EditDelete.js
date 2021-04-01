import './EditDelete.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { TiDeleteOutline } from 'react-icons/ti';

const EditDelete = ({food}) => {
    const {name, price , restaurant, _id} = food;

    const [display, setDisplay] = useState('');

    const deleteFood = id=>{
        const url = `https://foodeli-store.herokuapp.com/deleteFood/${id}`;
        fetch(url,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => setDisplay('none'))
    }

    return (
        <tr style={{display:display}}>
            <td>{name}</td>
            <td>{restaurant}</td>
            <td>৳{price}</td>
            <td>
                <Button variant="success" size="sm"><FiEdit /></Button>
                <Button variant="danger" size="sm" onClick={()=>deleteFood(_id)}><TiDeleteOutline /></Button>
            </td>
        </tr>
    );
};

export default EditDelete;