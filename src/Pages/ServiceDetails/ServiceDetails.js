import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url).then(res=>res.json()).then(data=>setService(data));
    },[])
    return (
        <div className='text-center'>
            <h2>Welcome to details: {service.name}</h2>
            <Link to='/checkout'><button className='btn-primary'>CheckOut</button></Link>
        </div>
    );
};

export default ServiceDetails;