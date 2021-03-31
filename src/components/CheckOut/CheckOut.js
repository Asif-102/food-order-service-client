import React from 'react';
import { useParams } from 'react-router';
import NavigationBar from '../Home/NavigationBar/NavigationBar';

const CheckOut = () => {
    let {id} = useParams();
    return (
        <div>
            <NavigationBar></NavigationBar>
            This is CheckOut {id}
        </div>
    );
};

export default CheckOut;