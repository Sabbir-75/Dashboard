import React from 'react';
import { useParams } from 'react-router';

const CallDetails = () => {
    const {id} = useParams() 
    console.log(id)
    return (
        <div>
            <h1 className='text-5xl font-bold text-info text-center'>Call Details : {id}</h1>
        </div>
    );
};

export default CallDetails;