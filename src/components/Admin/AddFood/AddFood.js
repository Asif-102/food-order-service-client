import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const AddFood = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [upload, setUpload] = useState('')
    const [color, setColor] = useState('')

    const onSubmit = data => {
        const foodData = {
            name:data.foodName,
            price:data.foodPrice,
            restaurant:data.restaurantName,
            quantity:data.foodQuantity,
            imageURL:imageURL
        }
        if(imageURL == null){
            setUpload('Uploaded fail please try again');
            setColor('red');
        }
        if(imageURL !== null){
            setUpload('Uploaded successfull');
            setColor('green');
        }
        const url = `http://localhost:5000/addFood`;
        // console.log(foodData);

        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(foodData)
        })
        .then(res => console.log('server side response ', res))
    }

    const handleImageUpload = food =>{
        setUpload('')
        // console.log(food.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '28dc48b6a06e6e1806a389a8a20f48be');
        imageData.append('image', food.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div style={{backgroundColor:'lightgrey'}} className="text-center">
            <h2>Add Food</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="foodName" defaultValue="" ref={register} placeholder="food name" required/>
                <br/>
                <hr/>
                <input type="number" name="foodPrice" defaultValue="" ref={register} placeholder="price" required/>
                <br/>
                <hr/>
                <input name="foodQuantity" defaultValue="" ref={register} placeholder="weight/size/quantity" required/>
                <br/>
                <hr/>
                <input name="restaurantName" defaultValue="" ref={register} placeholder="restaurant name" required/>
                <br/>
                <hr/>
                <h6>Select Image file
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} required/>
                </h6>
                <hr/>
                <Button type="submit" variant="primary"><AiOutlineCloudUpload /> Upload</Button>
                <hr/>
            </form>
            <p style={{color:color}}>{upload}</p>
        </div>
    );
};

export default AddFood;